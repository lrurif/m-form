<script setup>
import drag from '@m-form/core/src/components/drag/index.vue';
import { provide, ref } from 'vue';
import { cloneDeep } from 'lodash-es';
import { createDefaultData } from '@m-form/core/src/utils/data.js';

const props = defineProps({
  formType: {
    type: String,
    default: '1', // 1: 编辑模式，2：预览模式， 3： 正式模式
  },
  originData: Object,
  eventMap: Object,
  formSetting: Object,
  statusMap: Object,
});

const emit = defineEmits(['change']);

const dataSource = defineModel('dataSource');

provide('dataSource', dataSource);
provide('eventMap', props.eventMap);
provide('formSetting', props.formSetting);
provide('statusMap', props.statusMap);
provide('eventThis', props.eventThis);

const formData = ref({
  name: '',
});
if (props.originData) {
  formData.value = cloneDeep(props.originData);
} else {
  formData.value = createDefaultData(dataSource.value);
}

provide('formData', formData);
// 整个表单的数据
provide('globalFormData', formData);
provide('formType', props.formType);

const formRef = ref(null);
// 存储所有el-form的实例，用于校验
const formRefs = new Set();

provide('formRefs', formRefs);

formRefs.add(formRef);

async function validateForm() {
  for (const item of formRefs) {
    if (Array.isArray(item.value)) {
      for (const cItem of item.value) {
        await cItem?.validate?.();
      }
    } else {
      await item.value?.validate?.();
    }
  }
}
async function submit() {
  await validateForm();
  return formData.value;
}

function getFormData() {
  return formData.value;
}

function emitFormChange() {
  emit('change', formData.value);
}

provide('emitFormChange', emitFormChange);

defineExpose({
  submit,
  getFormData,
  formData,
  validateForm,
});
</script>

<template>
  <div class="form-wrapper">
    <el-form ref="formRef" style="height: 100%;" :model="formData" v-bind="formSetting" @submit.prevent>
      <drag v-model:dataSource="dataSource" />
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.form-wrapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 3px;
}
</style>
