<template>
  <div class="header-layout">
    <div class="header-inner">
      <div class="header-left">
        <CollapseIcon />
      </div>
      <div class="header-right">right</div>
    </div>
    <TagsView />
  </div>
</template>

<script lang="ts" setup>
import TagsView from "../TagsView/index.vue";
import CollapseIcon from "./components/CollapseIcon.vue";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
