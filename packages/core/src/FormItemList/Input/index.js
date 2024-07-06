import { cloneDeep } from 'lodash-es';
import { getFormItemConfig, showConfig } from '../../common/index';

const typeOptions = [
  { label: '文本', value: 'text' },
  { label: '密码', value: 'password' },
  { label: '多行输入框', value: 'textarea' },
];

export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-input',
  icon: 'inputIcon',
  alias: null,
  name: '输入框',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    ...getFormItemConfig('输入框'),
    { title: '基础配置', type: 'groupTitle' },
    { title: '默认值', key: 'modalValue', value: '', type: 'input', field: null },
    { title: '类型', key: 'type', value: 'text', type: 'select', field: null, options: typeOptions },
    { title: '最大输入长度', key: 'maxlength', value: null, type: 'inputNumber', field: null },
    { title: '是否显示统计字数', key: 'show-word-limit', value: false, type: 'switch', field: null },
    { title: '输入框占位文本', key: 'placeholder', value: '', type: 'input', field: null },
    { title: '是否显示清除按钮', key: 'clearable', value: false, type: 'switch', field: null },
    { title: '输入框行数', key: 'rows', value: null, type: 'inputNumber', field: null },
    { title: '是否禁用', key: 'disabled', type: 'switch', value: false, field: null },
    ...cloneDeep(showConfig),

  ],
  events: [
    { title: '输入内容时触发', key: 'input', value: '' },
    { title: '聚焦时触发', key: 'focus', value: '' },
    { title: '失焦时触发', key: 'blur', value: '' },
    { title: '值改变时触发', key: 'change', value: '' },
    { title: '点击清空按钮触发', key: 'clear', value: '' },
  ],
  children: [],
};
