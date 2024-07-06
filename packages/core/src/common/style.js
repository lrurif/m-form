const bordertypeOptions = [
  { value: 'none', label: '无边框' },
  { value: 'solid', label: '实线' },
  { value: 'dashed', label: '虚线 ' },
  { value: 'dotted', label: '点线 ' },
  { value: 'double', label: '双线 ' },
];
const directionOptions = [
  { value: 'row', label: '水平' },
  { value: 'column', label: '垂直' },
];
const parallelOptions = [
  { value: 'flex-start', label: '居左(上)' },
  { value: 'center', label: '居中' },
  { value: 'flex-end', label: '居右(下)' },
  { value: 'space-between', label: '两端对齐' },
  { value: 'space-around ', label: '两端平分' },
];
const flexWrapOptions = [
  { value: 'nowrap', label: '不换行' },
  { value: 'wrap', label: '换行' },
  { value: 'wrap-reverse', label: '反方向换行' },
];
const typeOptions = [
  { value: 'block', label: '块级元素' },
  { value: 'inline', label: '行内元素' },
  { value: 'inline-block', label: '行内块元素' },
  { value: 'flex', label: '弹性布局' },
];
const posOptions = [
  { value: 'static', label: '无定位' },
  { value: 'relative', label: '相对定位' },
  { value: 'absolute', label: '绝对定位' },
  { value: 'fixed', label: '固定定位' },
];
const bgRepeatOptions = [
  { value: 'no-repeat', label: '不重复' },
  { value: 'repeat', label: '水平垂直重复' },
  { value: 'repeat-x', label: '水平重复' },
  { value: 'repeat-y', label: '垂直重复' },
];
const bgPosOptions = [
  { value: 'center center', label: '居中' },
  { value: 'center top', label: '中上' },
  { value: 'center bottom', label: '中下' },
  { value: 'left top', label: '左上' },
  { value: 'left center', label: '左中' },
  { value: 'left bottom', label: '左下' },
  { value: 'right top', label: '右上' },
  { value: 'right center', label: '右中' },
  { value: 'right bottom', label: '右下' },
];
const bgSizeOptions = [
  { value: 'cover', label: '铺满' },
  { value: 'contain', label: '完整显示' },
  { value: '100%', label: '横向铺满' },
  { value: '100% 100%', label: '横向纵向铺满' },
];
const bgAttOptions = [
  { value: 'fixed', label: '固定' },
  { value: 'scroll', label: '滚动' },
];
const weightOptions = [
  { value: 'lighter', label: '细' },
  { value: 'normal', label: '正常' },
  { value: 'bold', label: '粗' },
  { value: '100', label: '100' },
  { value: '200', label: '200' },
  { value: '300', label: '300' },
  { value: '400', label: '400' },
  { value: '500', label: '500' },
  { value: '600', label: '600' },
  { value: '700', label: '700' },
  { value: '800', label: '800' },
  { value: '900', label: '900' },
];
const fsOptions = [
  { value: 'normal', label: '正常' },
  { value: 'italic', label: '倾斜' },
];
const textdcOptions = [
  { value: 'underline', label: '下划线' },
  { value: 'line-through', label: '删除线' },
];
const writeOptions = [
  { value: 'vertical-rl', label: '垂直自右而左' },
  { value: 'vertical-lr', label: '垂直自左而右' },
];
const boxSizOptions = [
  { value: 'content-box', label: '标准盒模型' },
  { value: 'border-box', label: '怪异盒模型' },
];
const overOptions = [
  { value: 'hidden', label: '超出隐藏' },
  { value: 'scroll', label: '超出滚动' },
  { value: 'auto', label: '超出自适应' },
];
const whiteSpaceOptions = [
  { value: 'normal', label: '默认值(normal)' },
  { value: 'nowrap', label: '不换行(nowrap)' },
  { value: 'pre', label: '保留格式(pre)' },
  { value: 'pre-wrap', label: '自动换行(pre-wrap)' },
  { value: 'pre-line', label: '保留换行(pre-line)' },
  { value: 'break-spaces', label: '空格换行(break-spaces)' },
];

const wordBreakOptions = [
  { value: 'normal', label: '默认值(normal)' },
  { value: 'break-all', label: '强制换行(break-all)' },
  { value: 'keep-all', label: '必要时换行(keep-all)' },
];
  // 块元素样式配置(可视化)
export const rectConfig = [
  { title: '宽', key: 'width', type: 'input', value: undefined, field: null, unit: 'px', min: 0 },
  { title: '高', key: 'height', type: 'input', value: undefined, field: null, unit: 'px', min: 0 },
  { title: '最小宽度', key: 'min-width', type: 'input', value: undefined, field: null, unit: 'px', min: 0 },
  { title: '最小高度', key: 'min-height', type: 'input', value: undefined, field: null, unit: 'px', min: 0 },
  { title: '最大宽度', key: 'max-width', type: 'input', value: undefined, field: null, unit: 'px', min: 0 },
  { title: '最大高度', key: 'max-height', type: 'input', value: undefined, field: null, unit: 'px', min: 0 },
];
  // 字(可视化)
export const fontConfig = [
  { title: '字号', key: 'font-size', type: 'input', value: undefined, field: null, unit: 'px', min: 10 },
  { title: '字体粗细', key: 'font-weight', type: 'select', value: undefined, field: null, options: weightOptions },
  { title: '字体颜色', key: 'color', type: 'colorPicker', value: undefined, field: null },
  { title: '行高', key: 'line-height', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '缩进', key: 'text-indent', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '文字间距', key: 'letter-spacing', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '对齐方式', key: 'text-align', type: 'input', value: undefined, field: null },
  { title: '字样', key: 'font-style', type: 'select', value: undefined, field: null, options: fsOptions },
  { title: '换行方式', key: 'white-space', type: 'select', value: undefined, field: null, options: whiteSpaceOptions },
  { title: '单词换行', key: 'word-break', type: 'select', value: undefined, field: null, options: wordBreakOptions },
  { title: '修饰线', key: 'text-decoration', type: 'select', value: undefined, field: null, options: textdcOptions },
  { title: '阴影', key: 'text-shadow', type: 'input', value: '', field: null },
  { title: '排列方式', key: 'writing-mode', type: 'select', value: undefined, field: null, options: writeOptions },
];
  // 外边距(可视化)
export const marginConfig = [
  { title: '上边距(外)', key: 'margin-top', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '下边距(外)', key: 'margin-bottom', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '左边距(外)', key: 'margin-left', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '右边距(外)', key: 'margin-right', type: 'input', value: undefined, field: null, unit: 'px' },
];
  // 内边距(可视化)
export const paddConfig = [
  { title: '上边距(内)', key: 'padding-top', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '下边距(内)', key: 'padding-bottom', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '左边距(内)', key: 'padding-left', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '右边距(内)', key: 'padding-right', type: 'input', value: undefined, field: null, unit: 'px' },
];
  // 边框(可视化)
export const borderConfig = [
  { title: '上边框', key: 'border-top-width', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '下边框', key: 'border-bottom-width', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '左边框', key: 'border-left-width', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '右边框', key: 'border-right-width', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '边框颜色', key: 'border-color', type: 'colorPicker', value: undefined, field: null },
  { title: '边框类型', key: 'border-style', type: 'select', value: undefined, field: null, options: bordertypeOptions },
  { title: '左上圆角', key: 'border-radius', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '左上圆角', key: 'border-top-left-radius', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '左下圆角', key: 'border-bottom-left-radius', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '右上圆角', key: 'border-top-right-radius', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '右下圆角', key: 'border-bottom-right-radius', type: 'input', value: undefined, field: null, unit: 'px' },
];
  // bg(可视化)
export const bgConfig = [
  { title: '背景', key: 'background', type: 'input', value: '', field: null },
  { title: '背景色', key: 'background-color', type: 'colorPicker', value: undefined, field: null },
  { title: '背景图片', key: 'background-image', type: 'input', value: undefined, field: null },
  { title: '背景图重复', key: 'background-repeat', type: 'select', value: undefined, field: null, options: bgRepeatOptions },
  { title: '背景图位置', key: 'background-position', type: 'select', value: undefined, field: null, options: bgPosOptions },
  { title: '背景图x轴位置', key: 'background-position-x', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '背景图y轴位置', key: 'background-position-y', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '背景图尺寸', key: 'background-size', type: 'select', value: undefined, field: null, options: bgSizeOptions },
  { title: '背景滚动', key: 'background-attachment', type: 'select', value: undefined, field: null, options: bgAttOptions },
];
  // layout(可视化)
export const layoutConfig = [
  { title: '容器类型', key: 'display', type: 'select', value: undefined, field: null, options: typeOptions },
  { title: 'flex', key: 'flex', type: 'input', value: undefined, field: null },
  { title: '主轴方向', key: 'flex-direction', type: 'select', value: undefined, field: null, options: directionOptions },
  { title: '主轴对齐方式', key: 'justify-content', type: 'select', value: undefined, field: null, options: parallelOptions },
  { title: '交叉轴对齐方式', key: 'align-items', type: 'select', value: undefined, field: null, options: parallelOptions },
  { title: '换行方式', key: 'flex-wrap', type: 'select', value: undefined, field: null, options: flexWrapOptions },
  { title: '盒模型', key: 'box-sizing', type: 'select', value: undefined, field: null, options: boxSizOptions },
  { title: 'y轴溢出', key: 'overflow-y', type: 'select', value: undefined, field: null, options: overOptions },
  { title: 'x轴溢出', key: 'overflow-x', type: 'select', value: undefined, field: null, options: overOptions },
];
  // pos(可视化)
export const posConfig = [
  { title: '定位方式', key: 'position', type: 'select', value: undefined, field: null, options: posOptions },
  { title: '距离顶部', key: 'top', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '距离底部', key: 'bottom', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '距离左侧', key: 'left', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '距离右侧', key: 'right', type: 'input', value: undefined, field: null, unit: 'px' },
  { title: '层级', key: 'z-index', type: 'input', value: undefined, field: null },
];
  // 阴影(可视化)
export const shadowConfig = [
  { title: '阴影', key: 'box-shadow', type: 'input', value: '', field: null },
];
  // all
export const styleConfig = [
  ...rectConfig,
  ...fontConfig,
  ...marginConfig,
  ...paddConfig,
  ...bgConfig,
  ...borderConfig,
  ...layoutConfig,
  ...posConfig,
  ...shadowConfig,
];
