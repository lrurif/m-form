import { cloneDeep } from 'lodash-es';
import { getFormItemConfig, showConfig } from '../../common/index';

export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-form-obj',
  icon: 'formObjIcon',
  alias: null,
  name: '表单对象',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    ...getFormItemConfig('表单对象'),
    { title: '基础配置', type: 'groupTitle' },
    { title: '表单标签宽度', key: 'child-label-width', value: '', type: 'input' },
    { title: '是否禁用', key: 'disabled', type: 'switch', value: false, field: null },
    ...cloneDeep(showConfig),
  ],
  events: [
  ],
  children: [],
};
