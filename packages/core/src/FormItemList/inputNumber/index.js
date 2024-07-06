import { cloneDeep } from 'lodash-es';
import { getFormItemConfig, showConfig } from '../../common/index';

const posOptions = [
  {
    label: '两侧',
    value: '',
  },
  {
    label: '靠右',
    value: 'right',
  },
];
export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-input-number',
  icon: 'inputNumberIcon',
  alias: null,
  name: '数字输入框',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    ...getFormItemConfig('数字输入框'),
    { title: '基础配置', type: 'groupTitle' },
    { title: '默认值', key: 'modalValue', value: null, type: 'inputNumber', field: null },
    { title: '最小值', key: 'min', value: null, type: 'inputNumber', field: null },
    { title: '最大值', key: 'max', value: null, type: 'inputNumber', field: null },
    { title: '计数器步长', key: 'step', value: 1, type: 'inputNumber', field: null },
    { title: '是否只能输入步长的倍数', key: 'step-strictly', value: false, type: 'switch', field: null },
    { title: '是否使用控制按钮', key: 'controls', value: true, type: 'switch', field: null },
    { title: '控制按钮位置', key: 'controls-position', value: '', type: 'select', field: null, options: posOptions },
    { title: '是否占满', key: 'isFill', type: 'switch', value: false, field: null },
    { title: '是否禁用', key: 'disabled', type: 'switch', value: false, field: null },
    ...cloneDeep(showConfig),
  ],
  events: [
    { title: '值改变事件', key: 'change', value: '' },
    { title: '聚焦时触发', key: 'focus', value: '' },
    { title: '失焦时触发', key: 'blur', value: '' },
  ],
  children: [],
};
