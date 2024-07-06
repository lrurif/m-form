<script setup>
import { ref } from 'vue';
import useFormDesign from '../../../store/index';
import PreviewDialog from './PreviewDialog/index.vue';
import { Delete, View } from '@element-plus/icons-vue';

const dialogVisible = ref(false);

function clearDatasource() {
  const store = useFormDesign();
  store.setDataSource([]);
  store.setCurrentComData(null);
}

const previewDialogVisible = ref(false);
</script>

<template>
  <div class="header-wrapper">
    <div>
      <el-button type="primary" plain :icon="View" round @click="previewDialogVisible = true">
        预览
      </el-button>
      <el-popconfirm title="确定要清空吗？" @confirm="clearDatasource">
        <template #reference>
          <el-button type="danger" plain :icon="Delete" round>
            清空
          </el-button>
        </template>
      </el-popconfirm>
    </div>
    <PreviewDialog v-model="previewDialogVisible" />
  </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
    border: 1px solid #ececec;
    border-top: none;
    padding: 10px 5px;
    display: flex;
    justify-content: flex-end;
}
</style>
