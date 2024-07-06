import { ref } from 'vue';
import { funcStrParse } from '@m-form/core/src/utils/data.js';
import axios from 'axios';
import createMethod from './method.js';

export default (data, formRef, formItemAttrMap, flowData) => {
  const formParseConfig = {};

  const eventThis = ref(createMethod(formParseConfig, formItemAttrMap, formRef, flowData));

  const formSetting = ref(data.formConfig);
  const dataSource = ref(data.dataSource);

  const eventsRawMap = parseEvent(data.events, eventThis.value);
  const eventMap = ref(eventsRawMap);
  const statusRawMap = parseStatus(data.formConfig, data.status, eventThis.value, flowData);
  const statusMap = ref(statusRawMap);
  // 给事件所需要的表单数据对象赋值 -start
  formParseConfig.formSetting = data.formConfig;
  formParseConfig.dataSource = dataSource;
  formParseConfig.eventMap = eventsRawMap;
  formParseConfig.statusMap = statusRawMap;
  formParseConfig.formRef = formRef;
  // 给事件所需要的表单数据对象赋值 -end

  const initForm = () => {
    return Promise.all([
      ...initEvents(data.events, eventsRawMap),
      ...initStatus(data.status, statusRawMap),
    ]);
  };

  return {
    formSetting,
    dataSource,
    eventMap,
    statusMap,
    eventThis,
    initForm,
  };
};

// 解析事件
function parseEvent(list, eventThis) {
  const res = list.reduce((pre, cur) => {
    pre[cur.name] = funcStrParse(cur.fn).bind(eventThis);
    return pre;
  }, {});
  return res;
}
// 解析数据状态
function parseStatus(formConfig, list, eventThis, flowData) {
  const statusMap = {};
  list.forEach((item) => {
    const { defaultValue, url, header, method, callback, params } = item;
    statusMap[item.field] = defaultValue ? funcStrParse(defaultValue).bind(eventThis)() : null;
    if (url) {
      statusMap[`${item.field}Handle`] = async (data) => {
        let reqHeader = {}; let reqData = data;
        const token = eventThis.getAuth();
        if (header) {
          reqHeader = funcStrParse(defaultValue).bind(eventThis)(data);
        }
        token && formConfig.authorizationKey && (reqHeader[formConfig.authorizationKey] = token);
        if (params) {
          reqData = funcStrParse(params).bind(eventThis)(data);
        }
        // 如果请求参数和传入请求参数都为对象
        if (isObject(flowData)) {
          reqData = {
            ...[null, undefined].includes(flowData) ? {} : flowData,
            ...[null, undefined].includes(reqData) ? {} : reqData,
          };
        }
        let reqUrl = '';
        if (/^(http|https):\/\/(\S+)$/.test(url)) {
          reqUrl = url;
        } else {
          reqUrl = `${formConfig.address || ''}${url}`;
        }
        const reqOptions = {
          url: reqUrl,
          method,
          headers: reqHeader,
        };
        reqOptions[(method === 'get' || method === '') ? 'params' : 'data'] = reqData;
        let res = await axios(reqOptions);
        res = res.data;
        if (callback) {
          res = funcStrParse(callback).bind(eventThis)(res);
        }
        statusMap[item.field] = res;
        return res;
      };
    } else {
      statusMap[`${item.field}Handle`] = (data = null) => {
        if (callback) {
          data = funcStrParse(callback).bind(eventThis)(data);
        }
        statusMap[item.field] = data;
        return data;
      };
    }
  });
  return statusMap;
}

function initEvents(list, eventMap) {
  return list.filter(item => item.init === '1').map((item) => {
    return eventMap[item.name]();
  });
}

function initStatus(list, statusMap) {
  return list.filter(item => item.init === '1').map((item) => {
    return statusMap[`${field}Handle`]();
  });
}

function isObject(data) {
  return Object.prototype.toString.call(data) === '[object Object]';
}
