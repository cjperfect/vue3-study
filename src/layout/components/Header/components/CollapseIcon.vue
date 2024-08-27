<template>
  <div class="hamburger-container" @click="handleCollapse">
    <el-icon v-if="isCollapse" class="icon" size="20"><expand /></el-icon>
    <el-icon v-else class="icon" size="20"><fold /></el-icon>
  </div>
</template>

<script setup>
import { useSettingStore } from "@/store/modules/setting";
import { computed } from "vue";
const settingStore = useSettingStore();

const isCollapse = computed(() => settingStore.isCollapse);

const handleCollapse = () => {
  settingStore.setCollapse(!isCollapse.value);
};
</script>
<style scoped lang="scss"></style>
