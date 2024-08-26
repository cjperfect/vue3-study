<template>
  <div class="sidebar-container" :class="{ 'has-logo': themeConfig.showLogo }">
    <Logo v-if="themeConfig.showLogo" :is-collapse="isCollapse" />
    <ElScrollbar wrap-class="scrollbar-wrapper">
      <ElMenu :default-active="activeMenu" background-color="#304156" text-color="#bfcbd9" :collapse="isCollapse">
        <SubItem v-for="route in permissionRoutes" :key="route.path" :item="route" />
      </ElMenu>
    </ElScrollbar>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { usePermissionStore } from "@/store/modules/permission";
import { useSettingStore } from "@/store/modules/setting";
import SubItem from "./components/SubItem.vue";
import Logo from "./components/Logo.vue";
const route = useRoute();

const permissionStore = usePermissionStore();
// 有权限访问的路由
const permissionRoutes = computed(() => permissionStore.permissionRoutes);

const settingStore = useSettingStore();

// 设置
const themeConfig = computed(() => settingStore.themeConfig);

// 是否折叠
const isCollapse = computed(() => !settingStore.isCollapse);

const activeMenu = computed(() => {
  const { path } = route;
  return path;
});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
