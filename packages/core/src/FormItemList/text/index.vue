<script setup>
defineOptions({
  name: 'VoeText',
});
defineProps({
  setApis: Object,
  dataSource: Object,
  loopData: Object,
  index: Number,
  loopOriginData: Array,
});
</script>

<template>
  <el-form-item>
    <div class="voe-text" v-on="setApis.events">
      {{ setApis.attrs.text }}
    </div>
  </el-form-item>
</template>

<style lang="scss" scoped>
.voe-text {
  color: var(--el-input-text-color, var(--el-text-color-regular));
  font-size: 14px;
}
</style>
