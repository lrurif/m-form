<script  setup>
import { ref } from 'vue';
import codeDialog from '../../../../../components/codeDialog/index.vue';

const props = defineProps({
  config: Object,
  codeTemplate: String,
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['updateData']);

const dialogVisible = ref(false);

function handleConfirm(value) {
  emit('updateData', value);
}
</script>

<template>
  <div>
    <el-button :disabled="disabled" @click="dialogVisible = true">
      编写函数
    </el-button>
    <codeDialog v-model="dialogVisible" :detail="config.value" title="编辑函数" :code-template="codeTemplate" @confirm="handleConfirm" />
  </div>
</template>

<style lang="scss" scoped>
</style>
