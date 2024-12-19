<script setup>
import products from "../products.js";

const props = defineProps({
  category: {
    type: String,
    required: true
  }
})

let filteredProducts = products.items.filter(product => product.categories === props.category)
</script>

<template>
  <h1>All {{ props.category }} products:</h1>

  <div class="products">
    <div v-for="(item, index) in filteredProducts" class="product-card">
      <img v-if="item.image" :src="'../src/assets/web/' + item.image" />
      <p>{{ item.name }}</p>
      <p>Color: {{ item.colors }}</p>
    </div>
  </div>

</template>

<style scoped>
.products {
  display: flex;
  gap: 1rem;

  .product-card {
    padding: 0.4rem;
    border: 1px solid red;

  }
}
</style>