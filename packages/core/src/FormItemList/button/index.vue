<script setup>
import { inject } from 'vue';

defineOptions({
  name: 'VoeButton',
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
  <el-form-item>
    <el-button
      v-if="formType !== '4'"
      v-bind="setApis.attrs" v-on="setApis.events"
    >
      {{
        setApis.attrs.textVal }}
    </el-button>
  </el-form-item>
</template>

<style lang="scss" scoped>
.icon {
  height: 100%;
  margin-left: 4px;
  cursor: pointer;
}
</style>
