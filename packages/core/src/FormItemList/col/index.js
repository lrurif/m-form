import { cloneDeep } from 'lodash-es';
import { showConfig } from '../../common/index';

export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-col',
  icon: 'inputIcon',
  alias: null,
  name: '栅格列',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    { title: '基础配置', type: 'groupTitle' },
    { title: '栅格占据的列数', key: 'span', value: 12, type: 'inputNumber' },
    { title: '栅格左侧的间隔格数', key: 'offset', value: 0, type: 'inputNumber' },
    { title: '栅格向右移动格数', key: 'push', value: 0, type: 'inputNumber' },
    { title: '栅格向左移动格数', key: 'pull', value: 0, type: 'inputNumber' },
    ...cloneDeep(showConfig),
  ],
  events: [
  ],
  children: [],
};
