import {createRouter, createWebHistory} from "vue-router";
import Menu from "./components/Menu.vue";
import store from "./components/store.vue";
import home from "./components/home.vue";
import order from "./components/order.vue";
import about from "./components/about.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/home',
            name: 'Home',
            component: home
        },
        {
            path: '/menu',
            name: 'Menu',
            component: Menu
        },
        {
            path: '/store',
            name: 'Store',
            component: store
        },
        {
            path: '/order',
            name: 'Order',
            component: order
        },
        {
            path: '/about',
            name: 'About',
            component: about
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        }
        if (savedPosition) {
            return savedPosition;
        }
        return { top: 0 };
    },
});

export default router