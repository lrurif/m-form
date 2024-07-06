<script setup>
import Coms from './components/Coms/index.vue';
import Content from './components/Content/index.vue';
import ComSetting from './components/ComSetting/index.vue';

import useFormDesign from './store/index';

const props = defineProps({
  formData: String,
});

const store = useFormDesign();

if (props.formData) {
  const data = JSON.parse(props.formData);
  store.formConfig = {
    ...store.formConfig,
    ...data.formConfig,
  };
  store.dataSource = data.dataSource || [];
  store.setEvents(data.events || []);
  store.setStatus(data.status || []);
  store.setCurrentComData(null);
} else {
  store.init();
}
// 给上层组件获取数据使用
function getData() {
  const data = {
    formConfig: store.formConfig,
    dataSource: store.dataSource,
    events: store.events,
    status: store.status,
  };
  return JSON.stringify(data);
}

defineExpose({
  getData,
});
</script>

<template>
  <el-container style="height: 100%;">
    <el-aside width="310px">
      <Coms />
    </el-aside>
    <el-main style="padding: 0;">
      <Content />
    </el-main>
    <el-aside width="310px">
      <ComSetting />
    </el-aside>
  </el-container>
</template>

<style lang="scss" scoped>
</style>
