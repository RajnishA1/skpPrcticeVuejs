<template>
  <div class=" min-h-screen">

    <section>
      <h1>Section 1</h1>

      <ProductHero/>
    </section>
    <section>

      <h1>Section 2</h1>

      <ProductHero/>
    </section>

  </div>
</template>

<script>
import ProductHero from './ProductHero.vue';

export default {
components:{
ProductHero,
}
}
</script>


