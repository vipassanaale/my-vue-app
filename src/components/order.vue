<script setup>
import { ref, onMounted } from 'vue';
import MainTemplate from "../templates/MainTemplate.vue";

// Reactive variables for cart items and total price
const cartItems = ref([]);
const totalPrice = ref(0);

// Fetch cart items from localStorage on page load
onMounted(() => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.value = cart;

  // Calculate the total price of items
  totalPrice.value = cart.reduce((sum, item) => sum + item.price, 0);
});

// Clear the cart
function clearCart() {
  localStorage.removeItem('cart');
  cartItems.value = [];
  totalPrice.value = 0;
}
</script>

<template>
  <main-template>
    <section class="hero">
      <img src="../assets/web/order-hero.jpg" alt="order hero">
    </section>

    <section class="order">
      <h1>Your Order:</h1>

      <div class="items" v-if="cartItems.length > 0">
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">
            {{ item.name }} - ${{ item.price }}
          </li>
        </ul>
        <p>Total: ${{ totalPrice }}</p>
        <button @click="clearCart">Clear Cart</button>
      </div>

      <p class="cart" v-else>Your cart is empty.</p>
    </section>

  </main-template>
</template>

<style scoped>

section.hero{
  margin-bottom: 5rem;
  img{
    border-radius: 30px;
    border-bottom: #DC6327 solid 10px;
    border-left: #DC6327 solid 10px;
    border-right: #DC6327 solid 10px;
    width: 96%;
    height: auto;
  }
}
section.order {
  margin: 0 0 5rem 3rem;
  h1 {
    text-align: center;
    font-family: "PT Sans", sans-serif;
    font-size: 25px;
    text-transform: uppercase;
  }

  div.items {
    justify-content: space-around;
    font-family: "arial", sans-serif;

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin: 20px 0;
      border-bottom: solid 2px #1D84A6;
      padding-bottom: 20px;
      width: 90%;
    }
    p{
      text-transform: uppercase;
      font-weight: bold;
    }
    button {
      margin-top: 2rem;
      display: inline-block;
      background-color: #DC6327;
      color: #f9f9f9;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      text-transform: uppercase;
      font-weight: bold;
      text-decoration: none;
      font-size: 12px;
      font-family: "Arial", sans-serif;
    }

    button:hover {
      background-color: #b04d21;
    }
  }
  p.cart{
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }
}

@media screen and (min-width: 600px) {
  section.hero{
    display: flex;
    img{
      border-radius: 30px;
      border-bottom: #DC6327 solid 20px;
      border-left: #DC6327 solid 20px;
      border-right: #DC6327 solid 20px;
      width: 50%;
      height: auto;
    }
    justify-content: space-around;
    margin-bottom: unset;
  }
  section.order {
    text-align: center;
    padding: 3rem 0 3rem 35rem;
    margin: unset;
    width: 25%;

    div.items {
      width: 100%;

      li {
        margin: 3px 0;
        border-bottom: solid 2px #1D84A6;
        font-size: 15px;
        text-transform: uppercase;
        padding: 30px 5px;
        width: 100%;
      }

      p {
        font-size: 20px;
        padding: 2rem 0;
      }
    }
  }
}


</style>

