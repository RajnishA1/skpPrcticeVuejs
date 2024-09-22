<template>
    <div class="min-h-screen bg-gray-100 py-10">
      <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="product-card bg-white rounded-lg shadow-lg p-5" v-for="product in products" :key="product.id">
          <!-- Product Image -->
          <img :src="product.thumbnail" alt="Product image" class="product-image w-full h-48 object-cover rounded-lg" />
          
          <!-- Product Info -->
          <div class="product-info mt-4">
            <h2 class="product-title text-xl font-semibold mb-2 text-gray-800">{{ product.title }}</h2>
            <p class="product-description text-sm text-gray-600 mb-4">{{ product.description }}</p>
            <p class="product-price text-lg font-bold text-blue-500 mb-2">$ {{ product.price }}</p>
            <p class="product-brand text-sm text-gray-700 mb-2">Brand: {{ product.brand }}</p>
            <div class="product-rating text-sm text-yellow-500">
              Rating: {{ product.rating }}⭐️
            </div>
            <div class="product-stock mt-2 text-sm" :class="{ 'text-red-500': product.stock <= 5, 'text-green-500': product.stock > 5 }">
              Stock: {{ product.availabilityStatus }}
            </div>
          </div>
          
          <!-- Buy Now Button -->
          <button class="buy-now bg-blue-500 text-white py-2 px-4 rounded-lg mt-5 hover:bg-blue-600 transition duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: null
      };
    },
    methods: {
      async fetchProduct() {
        const response = await axios.get('https://dummyjson.com/products');
        this.products = response.data.products;
      }
    },
    mounted() {
      this.fetchProduct();
      console.log("Called on mounted")

    },
    
 
  };
  </script>
  
  <style scoped>
  /* Optional custom styles */
  </style>
  