import { computed } from 'vue';

export default (props, formData) => {
  const rules = computed(() => {
    const regList = (props.setApis.attrs?.regList || []).map((item) => {
      let pattern = null;
      try {
        pattern = new RegExp(item.pattern);
      } catch (e) {
        console.log('正则解析失败：', e);
      }
      return {
        pattern,
        message: item.message,
      };
    });
    const res = [
      {
        required: props.setApis.attrs.required,
        message: props.setApis.attrs.requiredMessage,
      },
      ...regList,
    ];
    if (props.setApis.attrs.validator) {
      res.push({
        validator: props.setApis.attrs.validator,
        formData,
      });
    }
    return res;
  });
  return rules;
};
