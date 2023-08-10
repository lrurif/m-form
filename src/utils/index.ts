import { useCssVar } from '@vueuse/core';

const color = useCssVar('--el-bg-color', document.documentElement)
console.log(color)