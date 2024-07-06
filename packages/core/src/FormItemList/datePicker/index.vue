<script setup>
import { computed, inject } from 'vue';
import useRule from '../../common/useRule.js';
import { QuestionFilled } from '@element-plus/icons-vue';

defineOptions({
  name: 'VoeDatePicker',
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

const emitFormChange = inject('emitFormChange');

// 编辑模式下采用组件配置值，其他模式采用生成form表单数据
const modelValue = computed({
  get() {
    return formType === '1' ? props.setApis.attrs.modalValue : formData.value[props.dataSource.alias || props.dataSource.uuid];
  },
  set(val) {
    if (formType !== '1') {
      formData.value[props.dataSource.alias || props.dataSource.uuid] = val;
    }
  },
});
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
    <el-date-picker
      v-if="formType !== '4'"
      v-bind="setApis.attrs" v-model="modelValue" :class="[setApis.attrs.isFill ? 'width-fill' : '']" value-format="YYYY-MM-DD"
      v-on="setApis.events" @change="emitFormChange"
    />
    <div v-else class="text">
      {{ modelValue ?? "--" }}
    </div>
  </el-form-item>
</template>

<style lang="scss" scoped>
.icon {
  height: 100%;
  margin-left: 4px;
  cursor: pointer;
}
.text {
  color: var(--el-input-text-color, var(--el-text-color-regular));
}
:deep(.width-fill) {
  width: 100%!important;
}
</style>
