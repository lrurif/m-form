<script setup>
import { computed, inject, ref } from 'vue';
import useRule from '../../common/useRule.js';
import drag from '../../components/drag/index.vue';
import { Delete, Plus, QuestionFilled } from '@element-plus/icons-vue';
import { createDefaultData } from '../../utils/data.js';

defineOptions({
  name: 'VoeFormList',
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

const emitFormChange = inject('emitFormChange');

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

function handleAddItem() {
  const res = createDefaultData((props.dataSource?.children || []), {});
  modelValue.value.push(res);
  emitFormChange();
}
function handleDelete(index) {
  modelValue.value.splice(index, 1);
  emitFormChange();
}

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
    <el-button v-if="!['1', '4'].includes(formType)" type="primary" plain :icon="Plus" :disabled="setApis.attrs.disabled" @click="handleAddItem">
      新增
    </el-button>
    <div v-for="(item, index) in formType === '1' ? [{}] : modelValue" :key="index" class="form-child-item">
      <el-form
        ref="formRef" class="form-child" :model="item" v-bind="setApis.attrs"
        :label-width="setApis.attrs['child-label-width']"
        @submit.prevent
      >
        <!-- eslint-disable -->
        <drag v-model:data-source="dataSource.children" is-child :loop-data="item" :index="index"
          :loop-origin-data="modelValue" />
        
      </el-form>
      <el-icon class="delete-icon" @click="handleDelete(index)" v-if="!['1', '4'].includes(formType)">
        <Delete />
      </el-icon>
    </div>
    
  </el-form-item>
</template>

<style lang="scss" scoped>
.form-child {
  flex: 1;
  min-width: 0;
  margin-right: 13px;
  background-color: #F7F7F7;
  width: 100%;
  padding: 16px 16px 0;
}

.icon {
  height: 100%;
  margin-left: 4px;
  cursor: pointer;
}

.form-child-item {
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin-right: 16px;
  margin-top: 16px;

  .delete-icon {
    font-size: 20px;
    color: #ff4b4b;
    cursor: pointer;
  }

  :deep(.el-form-item) {
    margin-bottom: 18px;
  }
}
</style>
