<script setup>
import drag from '../../components/drag/index.vue';
import { inject } from 'vue';

defineOptions({
  name: 'VoeCol',
});

const props = defineProps({
  setApis: Object,
  dataSource: Object,
  loopData: Object,
  index: Number,
  loopOriginData: Array,
});
const formType = inject('formType');
</script>

<template>
  <el-col
    v-bind="setApis.attrs" :style="{
      padding: formType === '1' ? '4px' : null,
      position: 'relative',
    }"
  >
    <!-- eslint-disable -->
    <drag v-model:data-source="dataSource.children" is-child v-bind="setApis.attrs" :loop-data="loopData" :index="index" :loop-origin-data="loopOriginData"/>
    <slot/>
  </el-col>
</template>

<style lang="scss" scoped>
.container-wrapper {
  // display: flex;
}
</style>
