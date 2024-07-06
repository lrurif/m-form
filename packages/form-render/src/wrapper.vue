<script setup>
import FormCreate from './index.vue';
import useForm from './useForm';
import { onMounted, provide, ref } from 'vue';

defineOptions({
  name: 'FormCreateWrapper',
});
const props = defineProps({
  formType: {
    type: String,
    default: '1', // 1: 编辑模式，2：预览模式，3： 正式模式，4：阅读模式
  },
  originData: Object,
  formConfig: String,
  flowData: Object, // 额外的接口请求参数，会附加在请求参数中
});

const emit = defineEmits(['change']);

function handleChange(...args) {
  emit('change', ...args);
}

const formRef = ref(null);

// 存储所有表单项组件的attrs
const formItemAttrMap = ref({});
provide('formItemAttrMap', formItemAttrMap);

const data = JSON.parse(props.formConfig);

const {
  dataSource,
  eventMap,
  formSetting,
  statusMap,
  eventThis,
  initForm,
} = useForm(data, formRef, formItemAttrMap, props.flowData);

function submit() {
  return formRef.value.submit();
}

function getFormData() {
  return formRef.value.getFormData();
}
// 主要提供给自定义节点校验时，判断详情数据是否已拿到，拿到后才可进行校验

const initPromise = ref(null);
onMounted(() => {
  initPromise.value = initForm();
});
defineExpose({
  submit,
  getFormData,
  initPromise,
});
</script>

<template>
  <FormCreate
    ref="formRef"
    v-model:dataSource="dataSource" :form-type="formType"
    :origin-data="originData" :event-map="eventMap" :form-setting="formSetting" :status-map="statusMap"
    :event-this="eventThis"
    @change="handleChange"
  />
</template>
