import { cloneDeep } from 'lodash-es';
import { showConfig } from '../../common/index';

const justifyOptions = [
  {
    label: '左对齐',
    value: 'start',
  },
  {
    label: '右对齐',
    value: 'end',
  },
  {
    label: '居中',
    value: 'center',
  },
  {
    label: '两端间隔相等',
    value: 'space-around',
  },
  {
    label: '两端对齐',
    value: 'space-between',
  },
];

const alignOptions = [
  {
    label: '顶部对齐',
    value: 'top',
  },
  {
    label: '居中',
    value: 'middle',
  },
  {
    label: '底部对齐',
    value: 'bottom',
  },
];

export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-container',
  icon: 'gridIcon',
  alias: null,
  name: '栅格布局',
  attrs: [
    { title: '基础配置', type: 'groupTitle' },
    { title: '栅格间隔', key: 'gutter', value: 0, type: 'inputNumber' },
    { title: 'flex 布局下的水平排列方式', key: 'justify', value: 'start', type: 'select', options: justifyOptions },
    { title: 'flex 布局下的垂直排列方式', key: 'align', value: null, type: 'select', options: alignOptions },
    ...cloneDeep(showConfig),
  ],
  events: [],
  children: [],
};
