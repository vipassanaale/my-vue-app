<script setup>
import { useRouter } from 'vue-router';
import { addToCart } from '../utils/cartUtils'; // Utility file to handle cart

const router = useRouter();

function handleAddToCart(item) {
  addToCart(item); // Adds the selected item to the cart
  router.push({ name: 'Order' }); // Navigates to the Order page
}
</script>

<template>
  <section class="container">
    <h2>Stickers</h2>

    <aside>
      <div class="card">
        <img src="../assets/web/sticker1.jpg" alt="localz sticker">
        <h3>Localz Retro Sticker</h3>
        <p>$15.00</p>
        <button @click="handleAddToCart({ name: 'Localz Retro Sticker', price: 15 })" class="blue-btn">
          Add to bag
        </button>
      </div>

      <div class="card">
        <img src="../assets/web/sticker2.jpg" alt="localz sticker">
        <h3>Localz Holiday Sticker</h3>
        <p>$15.00</p>
        <button @click="handleAddToCart({ name: 'Localz Holiday Sticker', price: 15 })" class="blue-btn">
          Add to bag
        </button>
      </div>
    </aside>
  </section>
</template>


<style scoped>
section.container {
  background: #DC6327;
  padding: 3rem 0;

  h3 {
    font-size: 14px;
    margin-bottom: 1px;
    color: #f9f9f9;
  }

  p {
    color: #f9f9f9;
  }

  h2 {
    text-align: center;
    font-family: "PT Sans", sans-serif;
    text-transform: uppercase;
    color: #f9f9f9;
  }

  aside {
    display: flex;
    flex-direction: row;

    div.card {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      align-items: center;

      img {
        width: 75%;
        height: auto;
        border-radius: 100px;
        border-right: 8px solid #1D84A6;
        border-bottom: 8px solid #1D84A6;
      }
    }
  }
}

@media screen and (min-width: 600px) {
  aside {
    display: flex;
    justify-content: space-around;
  }

  div.card {
    max-width: 18%;
  }
}
</style>
