import { cloneDeep } from 'lodash-es';
import { getFormItemConfig, showConfig } from '../../common/index';

const defaultValue = '[\n  {\n    "value": "zhinan",\n    "label": "指南",\n    "children": [\n      {\n        "value": "shejiyuanze",\n        "label": "设计原则",\n        "children": [\n          {\n            "value": "yizhi",\n            "label": "一致"\n          },\n          {\n            "value": "fankui",\n            "label": "反馈"\n          },\n          {\n            "value": "xiaolv",\n            "label": "效率"\n          },\n          {\n            "value": "kekong",\n            "label": "可控"\n          }\n        ]\n      },\n      {\n        "value": "daohang",\n        "label": "导航",\n        "children": [\n          {\n            "value": "cexiangdaohang",\n            "label": "侧向导航"\n          },\n          {\n            "value": "dingbudaohang",\n            "label": "顶部导航"\n          }\n        ]\n      }\n    ]\n  }\n]';
export default {
  version: '1.0.0',
  uuid: '',
  key: 'voe-cascader',
  icon: 'cascaderIcon',
  alias: null,
  name: '级联选择器',
  // style: cloneDeep(style.styleConfig),
  attrs: [
    ...getFormItemConfig('级联选择器'),
    { title: '基础配置', type: 'groupTitle' },
    { title: '默认值', key: 'modalValue', value: null, type: 'input', field: null },
    { title: '数据', key: 'data', value: defaultValue, type: 'json', field: null },
    { title: '是否占满', key: 'isFill', type: 'switch', value: false, field: null },
    { title: '是否禁用', key: 'disabled', type: 'switch', value: false, field: null },
    ...cloneDeep(showConfig),
  ],
  events: [
    { title: '当选中节点变化时触发', key: 'change', value: '' },
  ],
  children: [],
};
