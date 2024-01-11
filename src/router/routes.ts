import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NoAuth from "@/views/NoAuthView.vue";
import AdminView from "@/views/AdminView.vue";
import ACCESS_ENUM from "@/access/accessEnum";
export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/noAuth",
        name: "无权限",
        component: NoAuth,
        meta: {
            hideInMenu: true,
        },
    },
    {
      path: "/admin",
      name: "管理员可见",
      component: AdminView,
      meta: {
        access: ACCESS_ENUM.ADMIN,
      },
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];
