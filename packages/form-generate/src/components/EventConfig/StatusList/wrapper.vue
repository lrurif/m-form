<script setup>
import { ref } from 'vue';
import StatusList from './index.vue';
import useFormDesign from '../../../store';

defineOptions({
  name: 'StatusListWrapper',
});
const dialogVisible = defineModel();

const store = useFormDesign();

const statusRef = ref(null);
function save() {
  const [statusPass, statusList] = statusRef.value.save();
  if (!statusPass) {
    return;
  }
  store.setStatus(statusList);
  dialogVisible.value = false;
}
</script>

<template>
  <el-dialog v-model="dialogVisible" title="数据源配置" :show-close="false" width="90%" top="5%">
    <StatusList ref="statusRef" :dialog-visible="dialogVisible" />
    <template #footer>
      <el-button type="primary" @click="save">
        保存
      </el-button>
      <el-button @click="dialogVisible = false">
        取消
      </el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
