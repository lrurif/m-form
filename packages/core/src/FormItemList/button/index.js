import { cloneDeep } from 'lodash-es';
import { showConfig } from '../../common/index';

export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-button',
  icon: 'buttonIcon',
  alias: null,
  name: '按钮',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    { title: '基础配置', type: 'groupTitle' },
    { title: '按钮文本', key: 'textVal', value: '保存', type: 'input', field: null },
    {
      title: '尺寸',
      key: 'size',
      value: '',
      type: 'select',
      field: null,
      options: [
        {
          label: '小型',
          value: 'small',
        },
        {
          label: '默认',
          value: 'default',
        },
        {
          label: '大',
          value: 'large',
        },
      ],
    },
    {
      title: '类型',
      key: 'type',
      value: '',
      type: 'select',
      field: null,
      options: [
        {
          label: '主要',
          value: 'primary',
        },
        {
          label: '成功',
          value: 'success',
        },
        {
          label: '警告',
          value: 'warning',
        },
        {
          label: '危险',
          value: 'danger',
        },
        {
          label: '信息',
          value: 'info',
        },
      ],
    },
    { title: '是否为圆角按钮', key: 'round', value: false, type: 'switch', field: null },
    { title: '是否为加载中状态', key: 'loading', value: false, type: 'switch', field: null },
    { title: '是否禁用', key: 'disabled', type: 'switch', value: false, field: null },
    ...cloneDeep(showConfig),

  ],
  events: [
    { title: '点击时触发', key: 'click', value: '' },
  ],
  children: [],
};
