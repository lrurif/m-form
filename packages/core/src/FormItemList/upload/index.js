import { cloneDeep } from 'lodash-es';
import { getFormItemConfig, showConfig } from '../../common/index';

export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-upload',
  icon: 'uploadIcon',
  alias: null,
  name: '文件上传',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    ...getFormItemConfig('文件上传'),
    { title: '基础配置', type: 'groupTitle' },
    { title: '默认值', key: 'modalValue', value: '[]', type: 'json', field: null },
    { title: '请求URL', key: 'action', value: '', type: 'input', field: null },
    { title: '文件路径回调', key: 'urlCallback', value: 'function f(res) {\n    return res.data.url;\n}', type: 'func', field: null },
    { title: '上传文件的字段名', key: 'name', value: 'file', type: 'input', field: null },
    { title: '请求头', key: 'headers', value: '{}', type: 'json', field: null },
    { title: '是否可以多选文件', key: 'multiple', value: false, type: 'switch', field: null },
    { title: '上传携带参数', key: 'data', value: '{}', type: 'json', field: null },
    { title: '文件接受类型', key: 'accept', value: '', type: 'input', field: null, extraProps: {
      placeholder: '例如：image/png,image/jpg',
    } },
    { title: '文件列表类型', key: 'list-type', value: 'text', type: 'select', field: null, options: [
      {
        label: 'text',
        value: 'text',
      },
      {
        label: 'picture',
        value: 'picture',
      },
      {
        label: 'picture-card',
        value: 'picture-card',
      },
    ] },
    { title: '允许上传文件的最大数量', key: 'limit', value: null, type: 'inputNumber', field: null },
    { title: '是否禁用', key: 'disabled', type: 'switch', value: false, field: null },
    ...cloneDeep(showConfig),
  ],
  events: [
    { title: '当绑定值变化时触发', key: 'change', value: '' },
  ],
  children: [],
};
