<script setup>
import { FormCreateWrapper } from '@m-form/form-render';
import { computed, ref } from 'vue';
import useFormDesign from '../../../../store/index';

const dialogVisible = defineModel();

const formRef = ref(null);

const store = useFormDesign();

const formConfig = computed(() => {
  return JSON.stringify({
    dataSource: store.dataSource,
    events: store.events,
    status: store.status,
    formConfig: store.formConfig,
  });
});
</script>

<template>
  <el-dialog v-model="dialogVisible" title="表单预览">
    <FormCreateWrapper v-if="dialogVisible" ref="formRef" form-type="2" :form-config="formConfig" />
  </el-dialog>
</template>

<style lang="scss" scoped>
</style>
