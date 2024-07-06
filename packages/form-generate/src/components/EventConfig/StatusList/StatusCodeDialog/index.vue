<script setup>
import { ref, watch } from 'vue';
import { configs, templateMap } from './config';
import { cloneDeep } from 'lodash-es';

const props = defineProps({
  detail: Object,
});

const emit = defineEmits(['confirm']);

const dialogVisible = defineModel();

const content = ref('');

const active = ref('defaultValue');
// codeEditor实例
const codeRef = ref(null);

// code弹框展示时，更新编辑器的值
watch(() => dialogVisible.value, (val) => {
  if (val) {
    content.value = cloneDeep(props.detail);
    active.value = 'defaultValue';
    codeRef.value && codeRef.value.setValue(content.value[active.value] || '');
  }
}, {
  immediate: true,
});

// 处理使用模板操作
function handleUseModal() {
  codeRef.value && codeRef.value.setValue(templateMap[active.value]);
}

// 确定操作
function handleConfirm() {
  content.value[active.value] = codeRef.value ? codeRef.value.getValue() : '';
  emit('confirm', content.value);
  dialogVisible.value = false;
}

function handleTabChange({ value }) {
  if (active.value === value) {
    return;
  }
  content.value[active.value] = codeRef.value ? codeRef.value.getValue() : '';
  active.value = value;
  codeRef.value && codeRef.value.setValue(content.value[active.value] || '');
}
</script>

<template>
  <div class="code-dialog">
    <el-dialog v-model="dialogVisible" title="编辑事件" fullscreen :show-close="false">
      <template #header>
        <div class="header">
          <div class="header-tabs">
            <span
              v-for="(item, index) in configs" :key="index" class="header-tab"
              :class="active === item.value ? 'active' : ''"
              @click="handleTabChange(item)"
            >{{ item.label }}</span>
          </div>
          <div>
            <el-button @click="handleUseModal">
              使用模板
            </el-button>
            <el-button @click="dialogVisible = false;">
              取消
            </el-button>
            <el-button type="primary" @click="handleConfirm">
              确定
            </el-button>
          </div>
        </div>
      </template>
      <CodeEditor
        ref="codeRef" language="javascript" :config="{ fontSize: 14 }"
        style="height: 100%;"
      />
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.code-dialog {
  :deep(.el-dialog) {
    padding: 0;

    .el-dialog__header {
      padding-bottom: 0;
    }

    .el-dialog__body {
      height: calc(100% - 42px);
    }
  }

  .header {
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-tab {
      font-size: 14px;
      cursor: pointer;
      margin-right: 30px;
      color: rgb(96, 98, 102);

      &.active {
        color: #FF6B13;
        font-weight: 600
      }
    }
  }
}
</style>
