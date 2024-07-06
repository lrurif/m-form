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
export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-inline-container',
  icon: 'inlineIcon',
  alias: null,
  name: '行内布局',
  attrs: [
    { title: '基础配置', type: 'groupTitle' },
    { title: '排列方式', key: 'justify', value: '', type: 'select', field: null, options: justifyOptions },
    { title: '间隔大小', key: 'gutter', value: 10, type: 'inputNumber', field: null },
    ...cloneDeep(showConfig),
  ],
  events: [
  ],
  children: [],
};
