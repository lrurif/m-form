import { cloneDeep } from 'lodash-es';
import { getFormItemConfig, showConfig } from '../../common/index';

export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-form-list',
  icon: 'formListIcon',
  alias: null,
  name: '表单列表',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    ...getFormItemConfig('表单列表'),
    { title: '基础配置', type: 'groupTitle' },
    { title: '默认值', key: 'modalValue', value: '[]', type: 'json', field: null },
    { title: '子表单标签宽度', key: 'child-label-width', value: '', type: 'input' },
    ...cloneDeep(showConfig),
  ],
  events: [
    { title: '当绑定值变化时触发', key: 'change', value: '' },
    { title: '聚焦时触发', key: 'focus', value: '' },
    { title: '失焦时触发', key: 'blur', value: '' },
  ],
  children: [],
};
