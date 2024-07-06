export const configs = [
  { value: 'defaultValue', label: '默认值' },
  { value: 'callback', label: '回调/方法' },
  { value: 'header', label: '请求头' },
  { value: 'params', label: '入参' },
];

export const templateMap = {
  defaultValue: 'function f() {\n  return {\n\n  }\n}',
  callback: 'function f(res) {\n  return res\n}',
  header: 'function f() {\n  return {\n    "Content-Type": "application/json",\n  }\n}',
  params: 'function f() {\n  return {\n\n  }\n}',
};
