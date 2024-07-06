<script setup>
import { ref, watch } from 'vue';
import { cloneDeep } from 'lodash-es';

const props = defineProps({
  detail: Object,
});
const emit = defineEmits(['confirm']);

const dialogVisible = defineModel();

const formData = ref({
  address: '',
  authorizationKey: '',
});

watch(() => dialogVisible.value, () => {
  formData.value = cloneDeep(props.detail);
});

function handleConfirm() {
  emit('confirm', formData.value);
  closeDialog();
}
function closeDialog() {
  dialogVisible.value = false;
}
</script>

<template>
  <el-dialog v-model="dialogVisible" title="接口全局配置">
    <el-form :model="formData">
      <el-form-item label="ip/域名（全局配置）">
        <el-input v-model="formData.address" />
      </el-form-item>
      <el-form-item label="请求头签名key">
        <el-input v-model="formData.authorizationKey" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary" @click="handleConfirm">
        确定
      </el-button>
      <el-button @click="closeDialog">
        取消
      </el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
</style>
