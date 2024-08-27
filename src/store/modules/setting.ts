import { defineStore } from "pinia";

export const useSettingStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: "settingState",
  // state: 返回对象的函数
  state: () => ({
    // menu 是否收缩
    isCollapse: false,
  }),
  getters: {},
  // 可以同步 也可以异步
  actions: {
    // 切换 Collapse
    setCollapse(value) {
      this.isCollapse = value;
    },
  },
});
