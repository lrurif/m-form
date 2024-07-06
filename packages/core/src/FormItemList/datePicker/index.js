import { cloneDeep } from 'lodash-es';
import { getFormItemConfig, showConfig } from '../../common/index';

export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-date-picker',
  icon: 'datepickerIcon',
  alias: null,
  name: '日期选择器',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    ...getFormItemConfig('日期选择器'),
    { title: '基础配置', type: 'groupTitle' },
    { title: '默认值', key: 'modalValue', value: '', type: 'datePicker', field: null },
    { title: '文本框是否可输入', key: 'editable', value: true, type: 'switch', field: null },
    { title: '是否显示清除按钮', key: 'clearable', value: true, type: 'switch', field: null },
    { title: '占位符', key: 'placeholder', value: null, type: 'input', field: null },
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
