import { ElMessage } from 'element-plus';
import { isRef } from 'vue';

export default function createMethod(formConfig, formItemAttrMap, formRef, flowData) {
  /**
   * 设置表单项的配置
   * @param {*} name
   * @param {*} key
   * @param {*} value
   * @param {object} options
   * @param {number} options.index
   */
  function setAttr(name, key, value, options = {}) {
    if (!name) {
      return;
    }
    let data = find(name);
    if (!data) {
      // 如果组件没有渲染且没有传入索引，就直接设置组件源配置
      if (options.index === undefined) {
        const dataSource = findDataSource(name, formConfig.dataSource.value);
        if (dataSource) {
          setDataSourceAttr(dataSource, key, value);
        }
      }

      return;
    }
    if (options.index !== undefined) {
      data = data[options.index];
    }
    // 如果为子表单下的表单项，且希望修改所有表单项下的值，而不是修改单个
    if (Array.isArray(data)) {
      data.forEach((item) => {
        item.value[key] = value;
      });
      // 修改数据源，使后续的组件创建时拿到最新的数据
      const dataSource = findDataSource(name, formConfig.dataSource.value);
      if (dataSource) {
        setDataSourceAttr(dataSource, key, value);
      }
    } else {
      // 如果在子表单中的组件，拿到的是ref对象，否则是个代理对象
      if (isRef(data)) {
        data && data.value && (data.value[key] = value);
      } else {
        data && (data[key] = value);
      }
    }
  }
  /**
   * 获取表单项的配置
   * @param {*} name
   * @param {*} key
   * @param {number} options.index
   * @returns
   */
  function getAttr(name, key, options = {}) {
    let data = find(name);
    if (!data) {
      if (options.index === undefined) {
        const dataSource = findDataSource(name, formConfig.dataSource.value);
        if (dataSource) {
          return getDataSourceAttr(dataSource, key);
        }
      }
      return null;
    }
    if (options.index !== undefined) {
      data = data[options.index];
    }
    if (Array.isArray(data)) {
      return data.map((item) => {
        return {
          [key]: item.value[key],
        };
      });
    }
    return data?.value?.[key];
  }
  /**
   * 设置表单项的数据源
   * @param {*} name
   * @param {*} val
   * @param {*} options
   */
  function setOptions(name, val, options) {
    setAttr(name, 'data', val, options);
  }
  /**
   * 设置表单项的数据源
   * @param {*} name
   * @param {*} val
   * @param {*} options
   */
  function getOptions(name, options) {
    return getAttr(name, 'data', options);
  }
  /**
   * 触发事件
   * @param {*} eventName
   * @param  {...any} args
   * @returns
   */
  function triggerEvent(eventName, ...args) {
    return formConfig.eventMap[eventName](...args);
  }
  /**
   * 获取数据源
   * @param {*} stateName
   * @returns
   */
  function getState(stateName) {
    return formConfig.statusMap[stateName];
  }
  /**
   * 执行数据源请求操作
   * @param {*} stateName
   * @param  {...any} args
   * @returns
   */
  function triggerStateEvent(stateName, ...args) {
    return formConfig.statusMap[stateName]?.(...args);
  }
  /**
   * 递归查找组件配置
   * @param {*} name
   * @returns
   */
  function find(name) {
    const data = Object.keys(formItemAttrMap.value).find((key) => {
      const temp = key.split('_').filter(Boolean);
      return temp.includes(name);
    });
    return formItemAttrMap.value[data];
  }
  /**
   * 获取表单的model
   * @returns {object} 表单model
   */
  function getData() {
    return formConfig.formRef.value.getFormData();
  }
  /**
   *设置表单model
   * @param {*} data
   * @returns {void}
   */
  function setData(data) {
    if (Object.prototype.toString.call(data) !== '[object Object]') {
      return;
    }
    Object.keys(data).forEach((key) => {
      setValue(key, data[key]);
    });
  }
  /**
   * 设置表单的值
   * @param {*} key 如果修改单个值：可以填入组件name或uuid；如果需要修改表单列表下的值：${列表name或uuid}.${索引}.${表单项name或uuid}，例如list.0.name
   * @param {*} value
   * @returns
   */
  function setValue(key, value) {
    const keys = key.split('.');
    let data = formConfig.formRef.value?.formData;
    if (!data) {
      return;
    }
    for (const word of keys.slice(0, -1)) {
      data = data[word];
    }
    return data[keys[keys.length - 1]] = value;
  }

  /**
   * 设置token值
   * @param {string} value
   */
  function setAuth(value) {
    formConfig.formSetting.authorizationValue = value;
  }
  /**
   * 获取token值
   * @returns string
   */
  function getAuth() {
    return formConfig.formSetting.authorizationValue;
  }
  /**
   *
   * @returns 校验全局表单
   */
  function validateForm() {
    return formRef.value.validateForm();
  }
  // 获取额外的请求参数
  function getFlowData() {
    return flowData;
  }
  return {
    setAttr,
    getAttr,
    setOptions,
    getOptions,
    triggerEvent,
    getState,
    triggerStateEvent,
    getData,
    setData,
    setAuth,
    getAuth,
    validateForm,
    $message: ElMessage,
    getFlowData,
  };
}
// 递归查找表单项配置
function findDataSource(name, list) {
  for (const item of list) {
    if ([item.uuid, item.alias].includes(name)) {
      return item;
    }
    const res = item.children && findDataSource(name, item.children);
    if (res) {
      return res;
    }
  }
}

function setDataSourceAttr(dataSource, key, value) {
  const attr = dataSource.attrs.find(item => item.key === key);
  if (attr) {
    if (attr.type === 'json') {
      value = JSON.stringify(value);
    }
    attr.value = value;
  }
}

function getDataSourceAttr(dataSource, key) {
  const attr = dataSource.attrs.find(item => item.key === key);
  if (attr) {
    if (attr.type === 'json') {
      return JSON.parse(attr.value);
    }
    return attr.value;
  }
}
