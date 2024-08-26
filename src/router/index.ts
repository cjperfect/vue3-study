import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import tableRoutes from "./modules/table";
import Layout from "@/layout/index.vue";

interface extendRoute {
  hidden?: boolean;
}

/* 静态组件 */
export const constantRoutes: Array<RouteRecordRaw & extendRoute> = [
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/errorPages/404.vue"),
    hidden: true,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    hidden: true,
    meta: { title: "登录" },
  },
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "/home",
    meta: { title: "首页", icon: "House" },
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        name: "home",
        meta: { title: "首页", icon: "House", affix: true, role: ["other"] },
      },
    ],
  },
];

/**
 * notFoundRouter(找不到路由)
 */
export const notFoundRouter = {
  path: "/:pathMatch(.*)",
  name: "notFound",
  redirect: "/404",
};

/* 异步组件 */
export const asyncRoutes = [...tableRoutes];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
