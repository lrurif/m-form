import { inject } from "vue";

export function funcStrParse(funcStr) {
    try {
        funcStr = `(() => ${funcStr})()`;
        /* eslint-disable no-eval */
        return window.eval(funcStr);
    } catch (e) {
        console.warn("自定义函数报错：", e);
    }
}

export function parseAttrValue({ type, value }) {
    try {
        if (value === undefined || value === null) {
            return null;
        }
        if (type === "json") {
            return JSON.parse(value);
        }
        if (type === "rule") {
            return funcStrParse(value);
        }
        if (type === "func") {
            const _this = inject("eventThis", {});
            return funcStrParse(value).bind(_this.value);
        }
        return JSON.parse(JSON.stringify(value));
    } catch (e) {
        return null;
    }
}

// 基于配置创建默认值
export function createDefaultData(list, res = {}) {
    list.forEach((item) => {
        const key = item.alias || item.uuid;
        const data = item.attrs.find((cItem) => cItem.key === "modalValue");
        if (data) {
            res[key] = parseAttrValue(data);
        }
        if (item.key === "voe-form-obj") {
            res[key] = createDefaultData(item.children);
            return;
        }
        // 如果为栅格组件或者行内布局组件，则直接递归获取children进行表单赋值
        if (item.key !== "voe-form-list" && item.children?.length) {
            createDefaultData(item.children, res);
        }
    });
    return res;
}
