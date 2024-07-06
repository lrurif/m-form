<script setup>
import { computed, inject } from 'vue';
import useRule from '../../common/useRule.js';
import { QuestionFilled } from '@element-plus/icons-vue';

defineOptions({
  name: 'VoeCheckbox',
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

const chooseText = computed(() => {
  return props.setApis.attrs?.data?.filter((item) => {
    return modelValue.value.includes(item.value);
  }).map(item => item.label).join(',');
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
    <el-checkbox-group
      v-if="formType !== '4'" v-bind="setApis.attrs" v-model="modelValue" v-on="setApis.events"
      @change="emitFormChange"
    >
      <el-checkbox v-for="item in setApis.attrs?.data || []" :key="item.value" :value="item.value" :label="item.label" />
    </el-checkbox-group>
    <div v-else class="text">
      {{ chooseText ?? "--" }}
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
</style>
