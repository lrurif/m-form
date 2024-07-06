<script setup>
import { computed, inject, ref } from 'vue';
import useRule from '../../common/useRule.js';
import { Plus, QuestionFilled } from '@element-plus/icons-vue';

defineOptions({
  name: 'VoeUpload',
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

// 编辑模式下采用组件配置值，其他模式采用生成的form表单数据
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

const previewImg = computed(() => {
  return modelValue.value.map(item => item.url);
});

const isShowPreivew = ref(false);

function handlePictureCardPreview() {
  if (props.setApis.attrs['list-type'] === 'text') {
    return;
  }
  isShowPreivew.value = true;
}

function handleSuccess(res, uploadFile) {
  const urlCallback = props.setApis.attrs.urlCallback;
  urlCallback && typeof urlCallback === 'function' && (uploadFile.url = urlCallback(res));
}

function handleChange() {
  emitFormChange(modelValue.value);
}
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
    <el-upload
      v-model:file-list="modelValue"
      v-bind="setApis.attrs"
      :on-preview="handlePictureCardPreview"
      :on-success="handleSuccess"
      :class="[(modelValue?.length === +setApis.attrs.limit || formType === '4') ? 'hidden' : '']"
      :on-change="handleChange"
      :on-remove="handleChange"
      :disabled="formType === '4'"
      v-on="setApis.events"
    >
      <template v-if="formType !== '4'">
        <el-button v-if="setApis.attrs['list-type'] !== 'picture-card'" :disabled="setApis.attrs.disabled">
          上传
        </el-button>
        <el-icon v-else>
          <Plus />
        </el-icon>
      </template>
    </el-upload>
    <el-image-viewer
      v-if="isShowPreivew"
      :url-list="previewImg"
      teleported
      @close="isShowPreivew = false"
    />
  </el-form-item>
</template>

<style lang="scss" scoped>
.icon {
  height: 100%;
  margin-left: 4px;
  cursor: pointer;
}
:deep(.hidden) {
  .el-upload {
    display: none;
  }
}
</style>
