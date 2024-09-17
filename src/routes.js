import {createRouter, createWebHistory } from 'vue-router'

import About_us from './components/About_us.vue';
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';

const routes =[
    {
        name: 'HelloWorld',
        component: Test,
        path: '/',
    },
    {
        name: 'About_us',
        component: About_us,
        path: '/about-us',
    },
 
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;