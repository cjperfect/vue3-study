<template>
  <!-- 有些路由不需要展示，例如：登录 -->
  <template v-if="!item.hidden">
    <!-- 没有子路由 -->
    <template v-if="hasOneShowingChild(item.children, item)">
      <RouteLink :to="onlyOneChild.path">
        <ElMenuItem :index="onlyOneChild.path">
          <ElIcon :size="20">
            <component :is="onlyOneChild?.meta.icon" />
          </ElIcon>
          <template #title>
            <span>{{ onlyOneChild?.meta.title }}</span>
          </template>
        </ElMenuItem>
      </RouteLink>
    </template>
    <!-- 还有子路由 -->
    <template v-else>
      <ElSubMenu :index="item.path">
        <template #title>
          <ElIcon :size="20">
            <component :is="item?.meta.icon" />
          </ElIcon>
          <span>{{ item?.meta.title }}</span>
        </template>
        <SubItem v-for="child in item.children" :key="child.path" :item="child" />
      </ElSubMenu>
    </template>
  </template>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

// 只有一个子路由需要展示
const onlyOneChild = ref(null);
const hasOneShowingChild = (children = [], parent) => {
  const showingChildren = children.filter((childRoute) => !childRoute.hidden);

  // 只有一个需要显示的子路由
  if (showingChildren.length === 1) {
    onlyOneChild.value = showingChildren[0];
    return true;
  }
  // 没有需要显示的子路由，直接显示父路由
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent };
    return true;
  }

  return false;
};
</script>
<style scoped lang="scss"></style>
