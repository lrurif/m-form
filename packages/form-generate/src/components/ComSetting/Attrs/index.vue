<script setup>
import ComInfo from './ComInfo/index.vue';
import FormControlAttr from './FormControlAttr/index.vue';
import useFormDesign from '../../../store/index';

const store = useFormDesign();
</script>

<template>
  <div>
    <ComInfo />
    <FormControlAttr :configs="store.currentComData?.attrs || []" />
  </div>
</template>

<style lang="scss" scoped>
</style>
