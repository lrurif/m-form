<script setup>
import useFormDesign from '../../../store';
import { ref, watch } from 'vue';
import { ElMessage } from 'element-plus';
import { cloneDeep } from 'lodash-es';
import codeEditor from '../../../components/codeEditor/index.vue';

const props = defineProps({
  dialogVisible: Boolean,
});

const store = useFormDesign();
const list = ref([]);

watch(() => props.dialogVisible, (val) => {
  if (val) {
    list.value = cloneDeep(store.events);
  }
}, {
  immediate: true,
});

function handleAddEvent() {
  list.value.push({
    name: '',
    init: '0',
    fn: '',
    remark: '',
  });
}

async function handleDelete(index) {
  list.value.splice(index, 1);
}

const codeDialogVisible = ref(false);

const detail = ref(null);

function handleEditCode(data) {
  detail.value = data;
  codeDialogVisible.value = true;
}

function handleCodeChange(code) {
  detail.value.fn = code;
}
function save() {
  for (const item of list.value) {
    if (item.name === '') {
      ElMessage.warning('请填写配置事件下的事件名称');
      return [false];
    } else if (item.fn === '') {
      ElMessage.warning('请编辑配置事件下的函数内容');
      return [false];
    } else if (item.remark === '') {
      ElMessage.warning('请填写配置事件下的事件备注');
      return [false];
    }
  }
  return [true, list.value];
}

const codeTemplate = 'function f() {\n\n}';
defineExpose ({
  save,
});
</script>

<template>
  <div class="event-list-wrapper">
    <el-button type="primary" size="small" @click="handleAddEvent">
      添加自定义事件
    </el-button>
    <el-table :data="list" header-row-class-name="table-header">
      <el-table-column label="事件名称">
        <template #default="scope">
          <el-input
            v-model="scope.row.name" placeholder="请输入事件名称"
            oninput="value=value.replace(/[^a-zA-Z]/g, '')"
          />
        </template>
      </el-table-column>
      <el-table-column label="是否初始化调用" width="140">
        <template #default="{ row }">
          <el-switch
            v-model="row.init"
            active-value="1"
            inactive-value="0"
          />
        </template>
      </el-table-column>
      <el-table-column label="函数内容" width="140">
        <template #default="{ row }">
          <el-link type="primary" :underline="false" @click="handleEditCode(row)">
            前往编辑
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
    <codeEditor v-model="codeDialogVisible" :detail="detail?.fn" title="编辑事件" :code-template="codeTemplate" @confirm="handleCodeChange" />
  </div>
</template>

<style lang="scss" scoped>
.event-list-wrapper {
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
