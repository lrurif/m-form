<script setup>
import { ref, watch } from 'vue';
import Attrs from './Attrs/index.vue';
import Events from './Events/index.vue';
import FormConfig from './FormConfig/index.vue';
import useFormDesign from '../../store/index';

const store = useFormDesign();

const activeName = ref('attrs');

watch(() => store.currentComData, (val) => {
  if (val === null) {
    activeName.value = 'form';
  } else {
    activeName.value = 'attrs';
  }
}, {
  immediate: true,
});
</script>

<template>
  <el-tabs v-model="activeName" stretch>
    <el-tab-pane v-if="store.currentComData" label="组件属性" name="attrs">
      <Attrs />
    </el-tab-pane>
    <el-tab-pane v-if="store.currentComData" label="组件事件" name="events">
      <Events />
    </el-tab-pane>
    <el-tab-pane label="表单配置" name="form">
      <FormConfig />
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
:deep(.el-tabs__header) {
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: #fff;
}
</style>
