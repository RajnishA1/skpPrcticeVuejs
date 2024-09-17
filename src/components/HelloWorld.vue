<template>
  <div class="bg-green-900">

  <Hero />
  <Hero2 />


  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Hero2 from "./Hero2.vue";


export default {
  name: 'HelloWorld',
  components: {
    Hero,
    Hero2,

  },

  data() {
    return {
      name: "",
      num1: null,
      num2: null,
     
    }
  },
  methods:{
     sum() {
      const result = this.num1+this.num2
     alert(result)
    },

    subtract(){
    const resultsub = this.num1-this.num2
    alert(resultsub)

    }
  }

}
</script>

<style scoped>
/* Add your scoped styles here */
</style>
