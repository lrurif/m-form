<script setup>
import useFormDesign from '../../../store';
import { ref, watch } from 'vue';
import { ElMessage } from 'element-plus';
import { cloneDeep } from 'lodash-es';
import StatusCodeDialog from './StatusCodeDialog/index.vue';

defineOptions({
  name: 'StatusList',
});

const props = defineProps({
  dialogVisible: Boolean,
});

const detail = ref(null);
const store = useFormDesign();
const list = ref([]);

const statusCodeDialogVisible = ref(false);

watch(() => props.dialogVisible, (val) => {
  if (val) {
    list.value = cloneDeep(store.status);
  }
}, {
  immediate: true,
});

function handleAddStatus() {
  list.value.push({
    field: '',
    url: '',
    method: '',
    defaultValue: '',
    callback: '',
    header: '',
    params: '',
    init: '0',
    remark: '',
  });
}

async function handleDelete(index) {
  list.value.splice(index, 1);
}

function handleEditCode(data) {
  detail.value = data;
  statusCodeDialogVisible.value = true;
}

function save() {
  for (const item of list.value) {
    if (item.field === '') {
      ElMessage.warning('请填写数据状态下的字段名称');
      return [false];
    } else if (item.remark === '') {
      ElMessage.warning('请填写数据状态下的备注');
      return [false];
    }
  }
  return [true, list.value];
}

function handleCodeChange(data) {
  detail.value = Object.assign(detail.value, data);
}
defineExpose ({
  save,
});
</script>

<template>
  <div class="status-list-wrapper">
    <el-button type="primary" size="small" @click="handleAddStatus">
      添加数据
    </el-button>
    <el-table :data="list" header-row-class-name="table-header">
      <el-table-column label="字段名">
        <template #default="scope">
          <el-input
            v-model="scope.row.field" placeholder="请输入事件名称"
            oninput="value=value.replace(/[^a-zA-Z]/g, '')"
          />
        </template>
      </el-table-column>
      <el-table-column label="方法名" width="140">
        <template #default="{ row }">
          {{ row.field ? `${row.field}Handle` : '--' }}
        </template>
      </el-table-column>
      <el-table-column label="接口地址">
        <template #default="{ row }">
          <el-input
            v-model="row.url" placeholder="请输入接口地址"
          />
        </template>
      </el-table-column>
      <el-table-column label="请求方式" width="140">
        <template #default="{ row }">
          <el-select v-model="row.method">
            <el-option value="get" label="Get" />
            <el-option value="post" label="Post" />
          </el-select>
        </template>
      </el-table-column>
      <!-- <el-table-column label="是否初始化调用" width="140">
        <template #default="{ row }">
          <el-switch
            v-model="row.init"
            active-value="1"
            inactive-value="0"
          />
        </template>
      </el-table-column> -->
      <el-table-column label="自定义" width="140">
        <template #default="{ row }">
          <el-link type="primary" :underline="false" @click="handleEditCode(row)">
            编辑
          </el-link>
        </template>
      </el-table-column>
      <el-table-column label="备注">
        <template #default="{ row }">
          <el-input
            v-model="row.remark" placeholder="请输入备注"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="140">
        <template #default="{ $index }">
          <el-link type="primary" :underline="false" @click="handleDelete($index)">
            删除
          </el-link>
        </template>
      </el-table-column>
    </el-table>
    <StatusCodeDialog v-model="statusCodeDialogVisible" :detail="detail" @confirm="handleCodeChange" />
  </div>
</template>

<style lang="scss" scoped>
.status-list-wrapper {
    :deep(.el-table) {
        margin-top: 16px;
        --el-table-header-bg-color: #F9F9F9;

        .table-header {
            .is-leaf {
                border: none;
            }
        }
    }
}
</style>
