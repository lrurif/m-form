<script setup>
import useSet from '../../hooks/useSet';
import { computed, inject, useAttrs } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  dataSource: Object,
  loopData: Object,
  index: Number,
  comName: String,
  loopOriginData: Array,
});

const setApis = useSet({ props });
const attrs = useAttrs();
const comProps = computed(() => {
  return {
    ...attrs,
    setApis: {
      attrs: setApis.attrs.value,
      events: setApis.events.value,
    },
    ...props,
  };
});

const formType = inject('formType');
</script>

<template>
  <template v-if="formType !== '1'">
    <component
      :is="comName"
      v-if="comProps.setApis.attrs.isHidden !== true"
      :data-source="dataSource" v-bind="comProps"
    >
      <slot />
    </component>
  </template>
  <template v-else>
    <component
      :is="comName"
      :class="[comProps.setApis.attrs.isHidden === true ? 'hidden' : '']" :data-source="dataSource" v-bind="comProps"
    >
      <slot />
    </component>
  </template>
</template>

<style lang='scss' scoped>
.hidden {
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 107, 19, 0.1);
    z-index: 10;
  }
}
</style>
