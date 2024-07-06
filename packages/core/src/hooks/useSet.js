import { inject, onUnmounted, ref, watch, watchEffect } from 'vue';
import { parseAttrValue, funcStrParse } from '../utils/data';

export default ({ props }) => {
  const eventMap = inject('eventMap');
  // 收集事件
  const events = ref({});
  // 收集状态
  const attrs = ref({});

  const formType = inject('formType');
  // 如果在表单列表组件内，则为子表单数据，否则为整个表单的数据
  const formData = inject('formData');
  // 整个表单的数据
  const globalFormData = inject('globalFormData');

  const formItemAttrMap = inject('formItemAttrMap', {});

  function updateFieldData() {
    props.dataSource.attrs.forEach((item) => {
      if (item.field && item.key !== 'modalValue' && item.type !== 'groupTitle') {
        const val = funcStrParse(item.field)(globalFormData.value, formData.value);
        if (val === attrs.value[item.key]) {
          return;
        }
        attrs.value[item.key] = val;
      }
    });
  }

  attrs.value = handleAttrsData();
  // 监听表单数据变化，触发响应式
  props.dataSource.attrs.forEach((item) => {
    if (item.field) {
      watchEffect(() => {
        const val = funcStrParse(item.field)(globalFormData.value, formData.value);
        if (val === attrs.value[item.key]) {
          return;
        }
        attrs.value[item.key] = val;
      });
    }
  });
  if (formType === '1') {
    watch(
      () => props.dataSource.attrs,
      () => {
        // 属性
        attrs.value = handleAttrsData();
        updateFieldData();
      },
      { immediate: true, deep: true },
    );
  } else {
    if (formItemAttrMap.value) {
      const key = `${props.dataSource.uuid}_${props.dataSource.alias || ''}`;
      if (props.index !== undefined) {
        let formItemAttr = formItemAttrMap.value[key];
        if (Array.isArray(formItemAttr)) {
          formItemAttr[props.index] = attrs;
        } else {
          formItemAttr = [];
          formItemAttr[props.index] = attrs;
          formItemAttrMap.value[key] = formItemAttr;
        }
      } else {
        formItemAttrMap.value[key] = attrs;
      }
      onUnmounted(() => {
        if (props.index !== undefined) {
          // 同步表单项配置数据
          const formItemAttr = formItemAttrMap.value[key];
          if (Array.isArray(formItemAttr)) {
            formItemAttr.splice(props.loopOriginData.length);
          }
        }
      });
    }
  }

  const setEvents = () => {
    const { events: _events } = props.dataSource ?? {};
    const datas = {};
    _events.forEach((item) => {
      const { value, key } = item ?? {};
      if (!value) {
        return;
      }
      datas[key] = function (...args) {
        const fn = eventMap[value];
        if (!fn) {
          return;
        }
        return fn(...args, props.loopData, props.index, props.loopOriginData);
      };
    });

    events.value = datas;
  };
  watch(
    () => props.dataSource.events,
    () => setEvents(),
    { deep: true, immediate: true },
  );

  function handleAttrsData() {
    return props.dataSource.attrs.reduce((pre, cur) => {
      const { key } = cur;
      try {
        const _value = parseAttrValue(cur);
        ![undefined, null].includes(_value) && (pre[key] = _value);
        return pre;
      } catch (e) {
        console.log(e, '解析组件配置失败');
        return pre;
      }
    }, {});
  }
  return {
    attrs,
    events,
  };
};
