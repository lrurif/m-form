import { cloneDeep } from 'lodash-es';
import { getFormItemConfig, showConfig } from '../../common/index';

export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-switch',
  icon: 'switchIcon',
  alias: null,
  name: '开关',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    ...getFormItemConfig('开关'),
    { title: '基础配置', type: 'groupTitle' },
    { title: '默认值', key: 'modalValue', value: false, type: 'switch', field: null },
    { title: '是否显示加载中', key: 'loading', value: false, type: 'switch', field: null },
    { title: 'switch宽度', key: 'width', value: null, type: 'input', field: null },
    { title: 'switch打开时的文字描述', key: 'active-text', value: null, type: 'input', field: null },
    { title: 'switch关闭时的文字描述', key: 'inactive-text', value: null, type: 'input', field: null },
    // { title: 'switch开启状态的值', key: 'active-value', value: JSON.stringify(true), type: 'json', field: null },
    // { title: 'switch关闭状态的值', key: 'inactive-value', value: JSON.stringify(false), type: 'json', field: null },
    { title: '是否禁用', key: 'disabled', type: 'switch', value: false, field: null },
    ...cloneDeep(showConfig),
  ],
  events: [
    { title: '值改变时触发', key: 'change', value: '' },
  ],
  children: [],
};
