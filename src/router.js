import {createRouter, createWebHistory} from "vue-router";
import Menu from "./components/Menu.vue";
import store from "./components/store.vue";
import home from "./components/home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // your routes here
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
            path: '/order-now',
            name: 'Order',
            component: store
        }
    ]
})

export default router