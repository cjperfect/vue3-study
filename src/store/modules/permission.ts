import { asyncRoutes, constantRoutes, notFoundRouter } from "@/router";
import { filterAsyncRoutes } from "@/utils/routers";
import { defineStore } from "pinia";
/* 权限控制 */
export const usePermissionStore = defineStore({
  id: "permissionStore",
  state: () => ({
    routes: [], // 静态路由
    asyncRoutes: [], // 动态路由
    cacheRoutes: [], // 缓存路由
  }),
  getters: {
    permissionRoutes: (state) => {
      return [...constantRoutes, ...asyncRoutes];
    },
  },
  actions: {
    /**
     * 根据角色生成路由，角色不同拥有权限不同
     * @param roles
     */
    generateRoutes(roles) {
      return new Promise((resolve) => {
        // 当前角色允许访问的路由
        let accessRoutes;
        if (roles?.length && !roles.includes("admin")) {
          accessRoutes = filterAsyncRoutes(asyncRoutes, roles);
        } else {
          // 超级管理
          accessRoutes = asyncRoutes || [];
        }
        accessRoutes = accessRoutes.concat(notFoundRouter);
        this.routes = constantRoutes.concat(accessRoutes);
        this.asyncRoutes = accessRoutes;
        resolve(accessRoutes);
      });
    },
  },
});
