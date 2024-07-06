<script setup>
import { ref } from 'vue';
import codeDialog from '../../../../../components/codeDialog/index.vue';


const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const detail = defineModel();
const dialogVisible = ref(false);

function handleConfirm(val) {
  detail.value = val;
}
</script>

<template>
  <div>
    <el-button :disabled="disabled" @click="dialogVisible = true">
      编辑
    </el-button>
    <codeDialog v-model="dialogVisible" title="JSON编辑" language="json" :detail="detail" @confirm="handleConfirm" />
  </div>
</template>

<style lang="scss" scoped>
</style>
