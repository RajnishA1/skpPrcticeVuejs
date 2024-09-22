import {createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import Todo from './components/Todo.vue'


const routes =[
    {
        name: 'HelloWorld',
        component:HelloWorld ,
        path: '/',
    },  
      {
        name: 'Todo',
        component:Todo ,
        path: '/Todo',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;