import { cloneDeep } from 'lodash-es';
import { getFormItemConfig, showConfig } from '../../common/index';

export default {
  version: '1.0.0',
  key: 'voe-select',
  icon: 'selectIcon',
  alias: null,
  name: '下拉框',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    ...getFormItemConfig('下拉框'),
    { title: '基础配置', type: 'groupTitle' },
    { title: '默认值', key: 'modalValue', type: 'input', value: '', field: null },
    { title: '是否展示清空按钮', key: 'clearable', type: 'switch', value: false, field: null },
    { title: '占位符', key: 'placeholder', type: 'input', value: null, field: null },
    { title: '是否可搜索', key: 'filterable', type: 'switch', value: false, field: null },
    {
      title: '多选框数据',
      key: 'data',
      type: 'list',
      value: [
        {
          label: '选项1',
          value: '1',
        },
        {
          label: '选项2',
          value: '2',
        },
      ],
      field: null,
      children: [
        { title: '选项文本', key: 'label', type: 'input', value: '', field: null },
        { title: '选项值', key: 'value', type: 'input', value: '', field: null },
      ],
    },
    { title: '是否禁用', key: 'disabled', type: 'switch', value: false, field: null },
    ...cloneDeep(showConfig),
  ],
  events: [
    { title: '值改变时触发', key: 'change', value: '' },
    { title: '聚焦时触发', key: 'focus', value: '' },
    { title: '失焦时触发', key: 'blur', value: '' },
    { title: '点击清空按钮时触发', key: 'clear', value: '' },
  ],
};
