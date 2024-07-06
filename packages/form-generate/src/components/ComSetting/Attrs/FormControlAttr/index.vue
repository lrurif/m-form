<script setup>
import Single from './Single.vue';
import codeDialog from '../../../../components/codeDialog/index.vue';
import { ref } from 'vue';

defineOptions({
  name: 'FormControlAttr',
});
defineProps({
  configs: Array,
  noBindFunc: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const formData = defineModel('formData');
function handleUpdate(data, value) {
  data.value = value;
}

const dialogVisible = ref(false);

const detail = ref(null);

const codeTemplate = 'function f(formData, currentFormData) {\n\n}';

const handleConfirm = function (val) {
  detail.value.field = val;
};

function showAttrFuncDialog(val) {
  detail.value = val;
  dialogVisible.value = true;
}
</script>

<template>
  <el-form label-position="top" style="padding: 16px" :disabled="disabled">
    <el-form-item
      v-for="(item, index) in configs" :key="index" :label="item.title"
      for="null"
      :style="{
        marginBottom: item.type === 'groupTitle' ? 0 : null,
      }"
    >
      <template #label>
        <div class="label" :class="item.type === 'groupTitle' ? 'bold' : ''">
          <span>{{ item.title }}</span>
          <span v-if="['isHidden', 'disabled'].includes(item.key) && !noBindFunc" class="fx" @click.stop="showAttrFuncDialog(item)">fx</span>
        </div>
      </template>
      <Single v-model:formData="formData" :disabled="!!item.field" :config="item" @updateModalValue="handleUpdate" />
    </el-form-item>
    <codeDialog v-model="dialogVisible" :detail="detail?.field" title="编辑属性函数" :code-template="codeTemplate" @confirm="handleConfirm" />
  </el-form>
</template>

<style lang="scss" scoped>
:deep(.el-form-item__label) {
  padding-right: 0;
}
.label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.bold {
    font-weight: bold;
  }
  .fx {
    cursor: pointer;
  }
}
</style>
