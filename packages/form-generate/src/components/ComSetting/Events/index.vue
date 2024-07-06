<script  setup>
import useFormDesign from '../../../store/index';

const store = useFormDesign();
</script>

<template>
  <div class="event-wrapper">
    <el-form v-if="store.currentComData?.events?.length > 0" label-position="top">
      <el-form-item v-for="item in store.currentComData?.events || []" :key="item.key" class="event">
        <template #label>
          <span>{{ item.title }}</span>
          <span>({{ item.key }})</span>
        </template>
        <el-select v-model="item.value" placeholder="请选择事件" clearable>
          <el-option v-for="event in store.events" :key="event.name" :value="event.name">
            {{ event.name }}
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-empty v-else description="暂无事件" />
  </div>
</template>

<style lang="scss" scoped>
.event-wrapper {
    padding: 1px 16px 16px;
}
</style>
