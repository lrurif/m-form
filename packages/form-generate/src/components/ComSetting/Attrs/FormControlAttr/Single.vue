<script setup>
import { computed } from 'vue';
import List from './List.vue';
import JsonEditor from './JsonEditor/index.vue';
import Func from './Func/index.vue';

const props = defineProps({
  config: Object,
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['updateModalValue']);
const formData = defineModel('formData');
const modalValue = computed({
  get() {
    return formData.value ? formData.value[props.config.key] : props.config.value;
  },
  set(val) {
    if (props.formData) {
      formData.value[props.config.key] = val;
    } else {
      emit('updateModalValue', props.config, val);
    }
  },
});

function handleUpdateData(value) {
  emit('updateModalValue', props.config, value);
}

const codeTemplate = props.config.type === 'rule' ? 'function f(rule, value, callback) {\n\n}' : 'function f() {\n\n}';
</script>

<template>
  <el-tooltip
    effect="dark"
    :content="config.key"
    placement="top"
    :trigger-keys="[]"
  >
    <div style="width: 100%;">
      <el-input
        v-if="config.type === 'input'"
        v-model="modalValue"
        :disabled="disabled" clearable :placeholder="config.placeholder || '请输入'"
        v-bind="config.extraProps || {}"
      />
      <el-radio-group v-else-if="config.type === 'radio'" v-model="modalValue" :disabled="disabled" v-bind="config.extraProps || {}">
        <el-radio v-for="option in config.options" :key="option.value" :value="option.value">
          {{ option.label }}
        </el-radio>
      </el-radio-group>
      <el-select
        v-else-if="config.type === 'select'"
        v-model="modalValue" :disabled="disabled" :placeholder="config.placeholder || '请选择'"
        v-bind="config.extraProps || {}"
        clearable
      >
        <el-option v-for="option in config.options" :key="option.value" :label="option.label" :value="option.value" />
      </el-select>
      <el-checkbox-group v-else-if="config.type === 'checkbox'" v-model="modalValue" :disabled="disabled" v-bind="config.extraProps || {}">
        <el-checkbox v-for="option in config.options" :key="option.value" :label="option.label" :value="option.value" />
      </el-checkbox-group>
      <el-color-picker v-else-if="config.type === 'color'" v-model="modalValue" :disabled="disabled" v-bind="config.extraProps || {}" clearable />
      <el-date-picker
        v-else-if="config.type === 'datePicker'"
        v-model="modalValue" :disabled="disabled" type="date" value-format="YYYY-MM-DD"
        :placeholder="config.placeholder || '请选择'" v-bind="config.extraProps || {}"
        clearable
      />
      <el-time-picker
        v-else-if="config.type === 'timePicker'"
        v-model="modalValue"
        :disabled="disabled" clearable :placeholder="config.placeholder || '请选择'"
        v-bind="config.extraProps || {}"
        value-format="HH:mm:ss"
      />
      <el-switch v-else-if="config.type === 'switch'" v-model="modalValue" :disabled="disabled" v-bind="config.extraProps || {}" />
      <el-input-number
        v-else-if="config.type === 'inputNumber'"
        v-model="modalValue"
        :disabled="disabled"
        v-bind="config.extraProps || {}"
        :placeholder="config.placeholder || '请输入'"
      />
      <List v-else-if="config.type === 'list'" :disabled="disabled" :config="config" />
      <JsonEditor v-else-if="config.type === 'json'" v-model="modalValue" :disabled="disabled" />
      <Func v-else-if="['func', 'rule'].includes(config.type)" :code-template="codeTemplate" :config="config" @updateData="handleUpdateData" />
    </div>
  </el-tooltip>
</template>

<style lang="scss" scoped></style>
