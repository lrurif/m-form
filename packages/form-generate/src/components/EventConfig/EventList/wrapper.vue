<script setup>
import { ref } from 'vue';
import EventList from './index.vue';
import useFormDesign from '../../../store';

defineOptions({
  name: 'EventListWrapper',
});
const dialogVisible = defineModel();

const store = useFormDesign();

const eventRef = ref(null);

function save() {
  const [eventPass, eventList] = eventRef.value.save();
  if (!eventPass) {
    return;
  }
  store.setEvents(eventList);
  dialogVisible.value = false;
}
</script>

<template>
  <el-dialog v-model="dialogVisible" title="事件配置" :show-close="false" width="90%" top="5%">
    <EventList ref="eventRef" :dialog-visible="dialogVisible" />
    <template #footer>
      <el-button type="primary" @click="save">
        保存
      </el-button>
      <el-button @click="dialogVisible = false">
        取消
      </el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
