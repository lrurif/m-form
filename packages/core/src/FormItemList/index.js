const map = new Map();
const list = import.meta.globEager('./*/index.js');
Object.values(list).forEach((d) => {
  if (d.default) {
    const { key, _key } = d.default;
    map.set(_key || key, d.default);
  }
});
const configs = [
  {
    name: '表单组件',
    children: [
      map.get('voe-input'),
      map.get('voe-input-number'),
      map.get('voe-radio'),
      map.get('voe-checkbox'),
      map.get('voe-select'),
      map.get('voe-switch'),
      map.get('voe-time-picker'),
      map.get('voe-date-picker'),
      map.get('voe-color-picker'),
      map.get('voe-cascader'),
      map.get('voe-upload'),
    ],
  },
  {
    name: '基础组件',
    children: [
      map.get('voe-text'),
      map.get('voe-button'),
    ],
  },
  {
    name: '布局组件',
    children: [
      map.get('voe-container'),
      map.get('voe-inline-container'),
      map.get('voe-form-list'),
      map.get('voe-form-obj'),

    ],
  },
];
export default configs;
