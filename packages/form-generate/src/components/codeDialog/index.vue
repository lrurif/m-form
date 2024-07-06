<script  setup>
import { ref, watch } from 'vue';
import CodeEditor from "../codeEditor/index.vue"

const props = defineProps({
  detail: String,
  title: String,
  codeTemplate: String,
  language: {
    type: String,
    default: 'javascript',
  },
});
const emit = defineEmits(['confirm']);
const dialogVisible = defineModel();

const content = ref('');

// codeEditor实例
const codeRef = ref(null);

// code弹框展示时，更新编辑器的值
watch(() => dialogVisible.value, (val) => {
  if (val) {
    content.value = props.detail || '';
    codeRef.value && codeRef.value.setValue(content.value);
  }
}, {
  immediate: true,
});

// 处理使用模板操作
function handleUseModal() {
  codeRef.value && codeRef.value.setValue(props.codeTemplate);
}

// 确定操作
function handleConfirm() {
  emit('confirm', content.value || null);
  dialogVisible.value = false;
}
</script>

<template>
  <div class="code-dialog">
    <el-dialog v-model="dialogVisible" title="" fullscreen :show-close="false">
      <template #header>
        <div
          class="header"
        >
          <span>
            {{ title }}</span>
          <div>
            <el-button v-if="codeTemplate" @click="handleUseModal">
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
        ref="codeRef"
        v-model="content"
        :language="language"
        :config="{ fontSize: 14 }"
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
    }
}
</style>
