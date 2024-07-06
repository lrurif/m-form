import { defineStore } from 'pinia';
import { cloneDeep } from 'lodash-es';

const originStatus = {
  formConfig: {
    labelPosition: 'right',
    labelWidth: '',
    requireAsteriskPosition: 'left',
    disabled: false,
    address: '', // 接口全局地址
    authorizationKey: 'Authorization', // 请求头token的key
    authorizationValue: '', // 请求头token的值
    isSaveDataToNode: true, // 节点数据是否存储于节点上
    showFormByModal: false, // 通过按钮触发弹框展示表单
  },
  dataSource: [], // 当前表单的所有组件配置
  currentComData: null, // 当前选中的组件配置
  events: [], // 事件列表
  status: [], // 数据状态和接口
  // 解析后的status
  data: {

  },
  // 解析后的events
  methods: {

  },
  currentMouseoverId: '', // 当前鼠标hover上的组件uuid
};
const useFormDesign = defineStore({
  id: 'form-design',
  state: () => (cloneDeep(originStatus)),
  actions: {
    setDataSource(list = []) {
      this.dataSource = list;
    },
    setCurrentComData(data) {
      this.currentComData = data;
    },
    setEvents(list) {
      this.events = cloneDeep(list);
    },
    setStatus(list) {
      this.status = cloneDeep(list);
    },
    init() {
      this.$patch(cloneDeep(originStatus));
    },
  },
});
export default useFormDesign;
