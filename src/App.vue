<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>
// 配置element中文
import zhCn from "element-plus/es/locale/lang/zh-cn";
</script>

<style lang="scss">
#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-pager li:focus {
  border: none;
}
.el-dropdown:focus {
  border: none;
}
.svg-icon:focus {
  border: none;
}
</style>
