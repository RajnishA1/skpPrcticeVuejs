<template>
    <div class=" min-h-screen">
       {{ todos }}
    </div>
  </template>
  
  <script>
import axios from 'axios';
  
  export default {

    data(){
        return{
            todos:null
        }
    },

    methods:{
      async  fetchTodos(){
         const response =await axios("https://dummyjson.com/todos")
         this.todos = response.data.todos
         console.log(response)
        }
    },
    mounted(){
        this.fetchTodos()
    }

  }
  </script>
  
  
  