<script setup>
import { inject, provide, ref, watch } from 'vue';
import Draggable from 'vuedraggable-es';
import Wrapper from '../wrapper/index.vue';
import colSetting from '../../FormItemList/col/index.js';
import uniqueId from '../../utils/uniqueId';
import { cloneDeep } from 'lodash-es';

const props = defineProps({
  isChild: Boolean,
  // dataSource: {
  //   type: Array,
  //   default: () => [],
  // },
  // 仅在数据组件下生效 start
  // 原始数组数据
  loopOriginData: Array,
  // 遍历对象
  loopData: Object,
  // 遍历索引
  index: Number,
  // 仅在数据组件下生效 end
  ghostVerticle: {
    type: Boolean,
    default: false,
  },
});

const store = inject("store")

const list = defineModel('dataSource');
function handleEnd(data) {
  if (data.added) {
    store.setCurrentComData(data.added.element);
  }
}

function handleDelete(index) {
  const data = list.value[index];
  if (store.currentComData.uuid === data.uuid) {
    store.setCurrentComData(null);
  }
  list.value.splice(index, 1);
}
function setCurrent(data) {
  store.setCurrentComData(data);
}

if (props.loopData !== undefined) {
  const loopRef = ref(props.loopData);
  watch(() => props.loopData, () => {
    loopRef.value = props.loopData;
  }, {
    immediate: true,
  });
  // 子表单数据
  provide('formData', loopRef);
}

const formType = inject('formType');
function handleMove(evt) {
  if (evt.draggedContext.element.key === 'voe-form-list' && evt.to.classList.contains('drag-child')) {
    return false;
  }
  return true;
}
function addCol(data) {
  const colData = cloneDeep(colSetting);
  colData.uuid = uniqueId();
  data.children.push(colData);
}

function handleMouseover(id) {
  store.currentMouseoverId = id;
}
function handleMouseout() {
  store.currentMouseoverId = '';
}
</script>

<template>
  <Draggable
    v-if="formType === '1'"
    :id="isChild ? '' : 'cvs_wraper'" v-model="list" item-key="uuid" :class="[isChild ? 'drag-child' : 'center', list.length === 0 ? 'empty' : '']"
    :group="{ name: 'edit', pull: true, put: true }" filter=".no-drag"
    animation="300"
    :swap-threshold=".2"
    :ghost-class="[ghostVerticle ? 'verticleGhost' : 'ghost']"

    :move="handleMove"
    @change="handleEnd"
  >
    <template #item="{ element, index: _index }">
      <div
        :id="element.uuid"
        class="mask" :class="[(store.currentComData && store.currentComData.uuid === element.uuid) ? 'active' : 'normal', store.currentMouseoverId === element.uuid ? 'hover' : '']"
        @mouseover.stop="handleMouseover(element.uuid)"
        @click.stop="setCurrent(element)"
        @mouseout.stop="handleMouseout"
      >
        <Wrapper
          v-bind="$attrs" :data-source="element" :index="index" :loop-data="loopData"
          :loop-origin-data="loopOriginData" class="center_item" :com-name="element?.key"
        />
        <div v-if="(store.currentComData && store.currentComData.uuid === element.uuid)" class="operate-btns">
          <el-icon v-if="element.key === 'voe-container'" @click="addCol(element)">
            <Plus />
          </el-icon>
          <el-icon @click.stop="handleDelete(_index)">
            <Delete />
          </el-icon>
        </div>
      </div>
    </template>
    <slot />
  </Draggable>
  <template v-else>
    <div>
      <div
        v-for="element in list"
        :id="element.uuid"
        :key="element.uuid"
      >
        <Wrapper
          v-bind="$attrs" :data-source="element" :index="index" :loop-data="loopData"
          :loop-origin-data="loopOriginData" class="center_item" :com-name="element?.key"
        />
      </div>
    </div>
  </template>
</template>

<style lang="scss" scoped>
:deep(.ghost) {
  outline-width: 0;
  height: 3px;
  box-sizing: border-box;
  font-size: 0;
  content: '';
  overflow: hidden;
  padding: 0;
  width: 100%;
  display: block;
  background: var(--el-color-primary);
  border: 2px solid var(--el-color-primary);
}
:deep(.verticleGhost) {
  outline-width: 0;
  width: 3px;
  box-sizing: border-box;
  font-size: 0;
  content: '';
  overflow: hidden;
  padding: 0;
  height: 100%;
  display: inline-block;
  background: var(--el-color-primary);
  border: 2px solid var(--el-color-primary);
}
.empty {
  min-height: 200px;
  overflow: hidden;
  width: 100%;
  position: relative;
  &::after {
    content: "请拖拽节点至此处";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #a8abb2;
    font-size: 14px;
  }
}

.fade-move {
  transition: all 0.5s;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}
.center {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #fff;

  &::-webkit-scrollbar {
    display: none;
  }

  .center_item {
    cursor: pointer;
  }
}

#cvs_wraper {
  overflow-x: hidden;
}
.active {
  border: 2px solid var(--el-color-primary);
}
.normal {
  border: 1px dashed #ddd;
  // &:hover {
  //   border-color: var(--el-color-primary);
  // }
}
.mask {
  position: relative;
  box-sizing: border-box;
  z-index:11;
  &.hover {
    border-color: var(--el-color-primary);
  }
  &:after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
    z-index: 8;
    content: "";
  }
  .operate-btns {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 107, 19, .7);
    color: #fff;
    z-index: 12;
    padding: 4px 4px;
    display: flex;
    align-items: center;
    cursor: auto;
    .el-icon {
      cursor: pointer;
    }
    &:hover {
    background-color: rgba(255, 107, 19, .9);

    }
  }
}
</style>
