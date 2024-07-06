<script setup>
import useFormDesign from '../../../../store/index';
import { ref, watch } from 'vue';
import { CopyDocument } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

const store = useFormDesign();
const alias = ref('');

function handleBlue() {
  if (alias.value) {
    const sameAliasData = find(alias.value, store.dataSource);
    if (sameAliasData && sameAliasData.uuid !== store.currentComData.uuid) {
      ElMessage.warning('变量名称重复，请重新输入');
      alias.value = '';
      return;
    }
  }

  store.currentComData.alias = alias.value;
}

function find(alias, list = []) {
  for (const item of list) {
    if (item.alias === alias) {
      return item;
    }
    const res = find(alias, item.children);
    if (res) {
      return res;
    }
  }
}

watch(() => store.currentComData, (val) => {
  if (val) {
    alias.value = val.alias;
  }
}, {
  immediate: true,
});

function copy(text) {
  if (!text) {
    return;
  }
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    ElMessage.success('复制成功');
  } else {
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    // 隐藏此输入框
    textarea.style.position = 'fixed';
    textarea.style.clip = 'rect(0 0 0 0)';
    textarea.style.top = '10px';
    // 赋值
    textarea.value = text;
    // 选中
    textarea.select();
    // 复制
    document.execCommand('copy', true);
    // 移除输入框
    document.body.removeChild(textarea);
    ElMessage.success('复制成功');
  }
}

// 输入校验，支持js变量规则
function handleInput(value) {
  let newValue = '';
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(newValue + char)) {
      newValue += char;
    }
  }
  alias.value = newValue;
}
</script>

<template>
  <div class="com-info-wrapper">
    <div class="com-info-header">
      <div class="com-name">
        {{ store.currentComData?.name }}
      </div>
      <div class="com-uuid">
        <el-tooltip content="标识" placement="top">
          <div class="uuid">
            {{ store.currentComData?.uuid }}
          </div>
        </el-tooltip>

        <el-icon class="copy-icon" @click="copy(store.currentComData?.uuid)">
          <CopyDocument />
        </el-icon>
      </div>
    </div>
    <el-input v-model="alias" placeholder="表单prop，需符合js变量名规则" @blur="handleBlue" @input="handleInput" />
  </div>
</template>

<style lang="scss" scoped>
.com-info-wrapper {
  padding: 1px 16px 16px;
  border-bottom: 1px solid #ececec;

  .com-info-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    color: #666;
    font-family: PingFang SC;
    font-size: 14px;
    font-style: normal;
    margin-bottom: 14px;
  }

  .com-uuid {
    display: flex;
    align-items: center;
    width: 50%;
    .uuid {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .copy-icon {
      margin-left: 10px;
      cursor: pointer;
    }
  }

}
</style>
