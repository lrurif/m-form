<script setup>
import { computed } from 'vue';
import drag from '../../components/drag/index.vue';

defineOptions({
  name: 'VoeInlineContainer',
});

const props = defineProps({
  setApis: Object,
  dataSource: Object,
  loopData: Object,
  index: Number,
  loopOriginData: Array,
});

const gutter = computed(() => {
  return `${props.setApis.attrs.gutter}px`;
});
</script>

<template>
  <el-form-item>
    <!-- eslint-disable -->
        <drag v-model:data-source="dataSource.children" is-child ghostVerticle
           class="inline-container" :style="{
            width: '100%',
            '--gutter': gutter,
            'justify-content': setApis.attrs.justify || 'flex-start'
           }"  :loop-data="loopData" :index="index" :loop-origin-data="loopOriginData"/>
  </el-form-item>
</template>

<style lang="scss" scoped>
.inline-container {
  display: flex;
  flex-wrap: wrap;
  :deep() .el-form-item{
    margin-bottom: 0;
  }
  & > * {
    margin-right: var(--gutter);
    flex-shrink: 0;
  }
}
</style>
