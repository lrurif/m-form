import { cloneDeep } from 'lodash-es';

export const formItemConfig = [
  { title: '标题配置', type: 'groupTitle' },
  { title: '字段名称', key: 'label', value: '表单项', type: 'input', field: null },
  { title: '标签宽度', key: 'label-width', value: '', type: 'input', field: null },
  { title: '帮助信息', key: 'tips', value: '', type: 'input', field: null },
  { title: '校验配置', type: 'groupTitle' },
  { title: '是否必填', key: 'required', value: false, type: 'switch', field: null },
  { title: '必填错误提示', key: 'requiredMessage', value: '', type: 'input', field: null },
  { title: '正则校验', key: 'regList', value: [], type: 'list', field: null, children: [
    {
      title: '正则表达式',
      key: 'pattern',
      value: '',
      type: 'input',
      field: null,
    },
    {
      title: '错误提示',
      key: 'message',
      value: '',
      type: 'input',
      field: null,
    },
  ] },
  { title: '自定义校验', key: 'validator', value: null, type: 'rule', field: null },
];

export const showConfig = [
  { title: '通用配置', type: 'groupTitle' },
  { title: '是否隐藏', key: 'isHidden', type: 'switch', value: false, field: null },
];

export function getFormItemConfig(name) {
  const res = cloneDeep(formItemConfig);
  for (const item of res) {
    if (item.key === 'label') {
      item.value = name;
      return res;
    }
  }
  return res;
}
