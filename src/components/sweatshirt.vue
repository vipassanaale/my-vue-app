<script setup>
import { addToCart } from '../utils/cartUtils';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleAddToCart(item) {
  addToCart(item);
  router.push({ name: 'Order' });
}
</script>

<template>
  <section class="container">
  <h2>Sweatshirts</h2>

  <section class="sweatshirt">

    <aside class="top">
      <div class="card">
        <img src="../assets/web/shredder-hoodie.jpg" alt="sweatshirt">
        <h3>Localz Shredder Hoodie</h3>
        <p>$50.00</p>
        <div class="colors">
          <img src="../assets/web/black.jpg" alt="black">
          <img src="../assets/web/grey.jpg" alt="grey">
          <img src="../assets/web/orange.jpg" alt="orange">
          <img src="../assets/web/blue.jpg" alt="blue">
          <p>+4 colors</p>
        </div>
        <button @click="handleAddToCart({ name: 'Localz Shredder Hoodie', price: 50 })" class="orange-btn">
          Add to bag
        </button>
      </div>

      <div class="card">
        <img src="../assets/web/lauren-localz.jpg" alt="crew neck">
        <h3>Localz Shredder crew neck</h3>
        <p>$50.00</p>
        <div class="colors">
          <img src="../assets/web/orange.jpg" alt="orange">
          <img src="../assets/web/blue.jpg" alt="blue">
          <img src="../assets/web/black.jpg" alt="black">
          <p>+4 colors</p>
        </div>
        <button @click="handleAddToCart({ name: 'Localz Skeleton Trucker Hat', price: 35 })"  class="orange-btn">
          Add to bag
        </button>
      </div>
    </aside>

    <aside class="bottom">
      <div class="card">
        <img src="../assets/web/nik-localz.jpg" alt="zip-up hoodie">
        <h3>Localz shredder zip-up hoodie</h3>
        <p>$50.00</p>
        <div class="colors">
          <img src="../assets/web/black.jpg" alt="black">
          <img src="../assets/web/grey.jpg" alt="grey">
          <img src="../assets/web/orange.jpg" alt="orange">
          <img src="../assets/web/blue.jpg" alt="blue">
          <p>+4 colors</p>
        </div>
        <button @click="handleAddToCart({ name: 'Localz Shredder Crew Neck', price: 50 })" class="orange-btn">
          Add to bag
        </button>
      </div>
    </aside>

  </section>
  </section>
</template> -->

<style scoped>
section.container {
  padding: 3rem 0;

  h2 {
    text-align: center;
    font-family: "PT Sans", sans-serif;
    text-transform: uppercase;

  }

  section.sweatshirt {
    display: flex;
    flex-direction: column;
    width: 100%;

    aside.top {
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
          border-radius: 10px;
          border-right: 8px solid #1D84A6;
          border-bottom: 8px solid #1D84A6;

        }

        h3 {
          font-size: 14px;
          margin-bottom: 1px;
        }

        div.colors {
          display: flex;
          gap: 4px;
          align-items: center;

          img {
            border-radius: 100px;
            width: 8%;
            height: 20%;
            border: none;
          }
        }
      }
    }

    aside.bottom {
      display: flex;
      flex-direction: row;
      padding-top: 1rem;
      margin-left: 0;

      div.card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 52%;

        img {
          width: 60%;
          height: auto;
          border-radius: 10px;
          border-right: 8px solid #1D84A6;
          border-bottom: 8px solid #1D84A6;
        }

        h3 {
          font-size: 14px;
          margin-bottom: 1px;
        }

        div.colors {
          display: flex;
          gap: 4px;
          align-items: center;

          img {
            border-radius: 100px;
            width: 8%;
            height: 20%;
            border: none;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 600px) {
  aside.top {
    display: flex;
    justify-content: space-around;
  }

  div.card {
    max-width: 30%;
  }

  aside.bottom{
   padding-left: 10.5rem;
    width: 86%;
  }
}

</style>