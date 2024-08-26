import Layout from "@/layout/index.vue";

export default [
  {
    path: "/table",
    component: Layout,
    redirect: "/table/commonTable",
    name: "table",
    meta: {
      title: "超级表格",
      icon: "School",
    },
    children: [
      {
        path: "/table/commonTable",
        component: () => import("@/views/table/CommonTable/index.vue"),
        name: "commonTable",
        meta: { title: "综合表格", keepAlive: true, icon: "MenuIcon" },
      },
      {
        path: "/table/operateTable",
        component: () => import("@/views/table/CommonTable/index.vue"),
        name: "operateTable",
        meta: { title: "可编辑表格", keepAlive: true, icon: "MenuIcon" },
      },
    ],
  },
];
