export const filterAsyncRoutes = (routes, roles) => {
  // const res = [];
  // routes.forEach((route) => {
  //   if (hasPermission(route, roles)) {
  //     if (route.children) {
  //       route.children = filterAsyncRoutes(route.children, roles);
  //     }
  //     res.push(route);
  //   }
  // });

  return routes;
};

/* 判断是否有这个路由权限 */
export const hasPermission = (route, roles) => {
  if (route.meta?.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  }
  return false;
};
