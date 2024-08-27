<template>
  <div class="container-layout" :class="classObj">
    <Sidebar />
    <div class="main-container">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Sidebar from "./components/Sidebar/index.vue";
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import Main from "./components/Main/index.vue";
import { useSettingStore } from "@/store/modules/setting";

const settingStore = useSettingStore();

const classObj = computed(() => ({
  hideSidebar: settingStore.isCollapse,
}));
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
