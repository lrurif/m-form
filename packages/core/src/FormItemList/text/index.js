import { cloneDeep } from 'lodash-es';
import { showConfig } from '../../common/index';

export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-text',
  icon: 'textIcon',
  alias: null,
  name: '文本',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    { title: '基础配置', type: 'groupTitle' },
    { title: '默认文本', key: 'text', value: '默认文本', type: 'input', field: null },
    ...cloneDeep(showConfig),

  ],
  events: [
    { title: '点击时触发', key: 'click', value: '' },
  ],
  children: [],
};
