<template>
  <div class="container-layout">
    <Sidebar />
    <div class="main-container">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "./components/Sidebar/index.vue";
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import Main from "./components/Main/index.vue";
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
