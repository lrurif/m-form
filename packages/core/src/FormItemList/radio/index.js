import { cloneDeep } from 'lodash-es';
import { getFormItemConfig, showConfig } from '../../common/index';

export default {
  version: '1.0.0',
  key: 'voe-radio',
  icon: 'radioIcon',
  alias: null,
  name: '单选框',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    ...getFormItemConfig('单选框'),
    { title: '基础配置', type: 'groupTitle' },
    { title: '默认值', key: 'modalValue', type: 'input', value: null, field: null },
    { title: '单选框数据', key: 'data', type: 'list', value: [
      {
        label: '选项1',
        value: '1',
      },
      {
        label: '选项2',
        value: '2',
      },
    ], field: null, children: [
      { title: '选项文本', key: 'label', type: 'input', value: '', field: null },
      { title: '选项值', key: 'value', type: 'input', value: '', field: null },
    ] },
    { title: '是否禁用', key: 'disabled', type: 'switch', value: false, field: null },
    ...cloneDeep(showConfig),
  ],
  events: [
    { title: '值改变事件', key: 'change', value: '' },
  ],
  children: [],
};
