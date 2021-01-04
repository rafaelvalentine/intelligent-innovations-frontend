import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
// import About from "../views/About";
import HowitWork from "../views/HowitWorks";
import Faqs from "../views/Faqs";
const NotFound = {
    template: "<p class='text-center mt-16'>Page not found</p>",
};

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About"),
    },
    {
        path: "/how_it_works",
        name: "Howitworks",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: HowitWork,
    },
    {
        path: "/fags",
        name: "Faqs",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Faqs,
    },
    {
        path: "*",
        name: "Not-Found",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: NotFound,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;