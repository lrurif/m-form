import { cloneDeep } from 'lodash-es';
import { getFormItemConfig, showConfig } from '../../common/index';

const formatOptions = [
  {
    label: 'hsl',
    value: 'hsl',
  },
  {
    label: 'hsv',
    value: 'hsv',
  },
  {
    label: 'hex',
    value: 'hex',
  },
  {
    label: 'rgb',
    value: 'rgb',
  },
];
export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-color-picker',
  icon: 'colorPickerIcon',
  alias: null,
  name: '颜色选择器',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    ...getFormItemConfig('颜色选择器'),
    { title: '基础配置', type: 'groupTitle' },
    { title: '默认值', key: 'modalValue', value: null, type: 'color', field: null },
    { title: '是否支持透明度选择', key: 'show-alpha', value: false, type: 'switch', field: null },
    { title: '颜色格式', key: 'color-format', value: null, type: 'select', field: null, options: formatOptions },
    { title: '是否禁用', key: 'disabled', type: 'switch', value: false, field: null },
    ...cloneDeep(showConfig),
  ],
  events: [
    { title: '当绑定值变化时触发', key: 'change', value: '' },
    { title: '聚焦时触发', key: 'focus', value: '' },
    { title: '失焦时触发', key: 'blur', value: '' },
  ],
  children: [],
};
