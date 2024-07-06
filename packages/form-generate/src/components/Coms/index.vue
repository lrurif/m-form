<script setup>
import config from '@m-form/core/src/FormItemList/index';
import Draggable from 'vuedraggable-es';
import uniqueId from '@m-form/core/src/utils/uniqueId';
import { cloneDeep } from 'lodash-es';
import ComTree from './ComTree/index.vue';
import { ref } from 'vue';
import colSetting from '@m-form/core/src/FormItemList/col/index.js';

function cloneDefaultField(e) {
  const dragData = cloneDeep(e);
  // 栅格布局默认存在两列
  if (dragData.key === 'voe-container') {
    for (let i = 0; i < 2; i++) {
      const colData = cloneDeep(colSetting);
      colData.uuid = uniqueId();
      dragData.children.push(colData);
    }
  }
  dragData.uuid = uniqueId();
  return dragData;
}

const active = ref('com');

function handleMove(evt) {
  if (evt.draggedContext.element.key === 'voe-form-list' && evt.to.classList.contains('drag-child')) {
    return false;
  }
  return true;
}
function requireImg(ig) {
  return new URL(`../../assets/img/${ig}.png`, import.meta.url).href;
}
</script>

<template>
  <el-scrollbar class="coms-wrapper">
    <el-tabs v-model="active" stretch>
      <el-tab-pane label="组件" name="com">
        <div class="content">
          <div v-for="(item, index) in config" :key="index" class="group-wrapper">
            <div class="group-name">
              {{ item.name }}
            </div>
            <div>
              <Draggable
                v-model="item.children"
                :sort="false"
                :group="{ name: 'com', pull: 'clone', put: false }"
                item-key="name"
                class="com-wrapper"
                :clone="cloneDefaultField"
                :move="handleMove"
              >
                <template #item="{ element }">
                  <div class="com-item">
                    <img v-if="element.icon" :src="requireImg(element.icon)" class="com-icon">
                    {{ element.name }}
                  </div>
                </template>
              </Draggable>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="表单结构" name="form">
        <div class="content">
          <ComTree />
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
.coms-wrapper {
    height: 100%;
    padding: 16px;
    padding: 0;
    box-sizing: border-box;
    .content {
      padding: 0 16px 16px;
    }
    .group-wrapper {
        margin-bottom: 16px;
    }
    .group-name {
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 16px;
    }
    .com-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .com-item {
        flex: 0 0 calc(50% - 4px);
        height: 32px;
        border: 1px solid #ddd;
        margin-bottom: 8px;
        padding: 0 8px;
        color: #666;
        font-size: 12px;
        display: flex;
        align-items: center;
        cursor: move;
        .com-icon {
          width: 14px;
          height: 14px;
          margin-right: 8px;
        }
    }
}
</style>
