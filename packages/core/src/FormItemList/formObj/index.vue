<script setup>
import { computed, inject, provide, ref } from 'vue';
import useRule from '../../common/useRule.js';
import drag from '../../components/drag/index.vue';
import { QuestionFilled } from '@element-plus/icons-vue';

defineOptions({
  name: 'VoeFormObj',
});

const props = defineProps({
  setApis: Object,
  dataSource: Object,
  loopData: Object,
  index: Number,
  loopOriginData: Array,
});

const formData = inject('formData');
const rules = useRule(props, formData.value);

const formType = inject('formType');

// 编辑模式下采用组件配置值，其他模式采用生成的form表单数据
const modelValue = computed({
  get() {
    // 编辑模式下，固定展示一项，可拖拽即可
    return formType === '1' ? [{}] : formData.value[props.dataSource.alias || props.dataSource.uuid];
  },
  set(val) {
    if (formType !== '1') {
      formData.value[props.dataSource.alias || props.dataSource.uuid] = val;
    }
  },
});

provide('formData', modelValue);
const formRef = ref(null);

const formRefs = inject('formRefs', formRef);

formRefs.add(formRef);
</script>

<template>
  <el-form-item v-bind="setApis.attrs" :prop="dataSource.alias || dataSource.uuid" :rules="rules">
    <template v-if="setApis.attrs.tips || setApis.attrs.label" #label>
      <span>{{ setApis.attrs.label }}</span>
      <el-tooltip v-if="setApis.attrs.tips" effect="dark" :content="setApis.attrs.tips" placement="top">
        <el-icon class="icon">
          <QuestionFilled />
        </el-icon>
      </el-tooltip>
    </template>
    <el-form
      ref="formRef"
      :style="{
        padding: formType === '1' ? '4px' : null,
      }"
      class="form-wrapper"
      style="width: 100%;" :model="modelValue" v-bind="setApis.attrs"
      label-position="right"
      :label-width="setApis.attrs['child-label-width']"
      @submit.prevent
    >
      <!-- eslint-disable -->
        <drag v-model:data-source="dataSource.children" is-child />
      </el-form>
  </el-form-item>
</template>

<style lang="scss" scoped>
.icon {
  height: 100%;
  margin-left: 4px;
  cursor: pointer;
}
.form-wrapper {
  :deep(.el-form-item) {
    margin-bottom: 18px;
  }
}
</style>
