import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "About",
        component: () => import("../views/About.vue"),
    },
];

const router = createRouter({
    history: createWebHistory("/about-me-test/"),
    routes,
});

export default router;
