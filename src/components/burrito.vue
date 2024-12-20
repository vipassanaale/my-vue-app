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
  <section class="Menu2">
    <h2>Breakfast Burritos</h2>
    <section class="burritos">
      <div class="column">
      <aside>
        <img src="../assets/Localzburrito.jpg" alt="Localz Burrito">
        <div class="content">
          <h3>Localz Burrito . . . . . . $12</h3>
          <p>Hashbrowns, Eggs, cheese, choice of protien (bacon/sausage/soy chorizo/pork chorizo)</p>
          <button @click="handleAddToCart({ name: 'Localz Burrito', price: 12 })" class="white-btn">
            Add to Order
          </button>
        </div>
      </aside>

      <aside>
        <img src="../assets/northshore-burrito.jpg" alt="North Shore Burrito">
        <div class="content">
          <h3>North Shore Burrito . . . . . . $10</h3>
          <p>Hashbrowns, Eggs, Cheese, Peppers, Onions, Choice of Protein (bacon/sausage/soy chorizo/pork chorizo)</p>
          <button @click="handleAddToCart({ name: 'North Shore Burrito', price: 10 })" class="white-btn">
            Add to Order
          </button>
        </div>
      </aside>
      </div>

      <div class="column">
      <aside>
        <img src="../assets/Risengrindburrito.jpg" alt="Rise n Grind Burrito">
        <div class="content">
          <h3>Rise 'N Grind . . . . . . $14</h3>
          <p>French Fries, Eggs, Cheese, Peppers, Caramelized Onions, Pork Chorizo, Avocado</p>
          <button @click="handleAddToCart({ name: 'Rise N Grind', price: 14 })" class="white-btn">
            Add to Order
          </button>
        </div>
      </aside>

      <aside>
        <img src="../assets/web/surfsup-burrito.jpg" alt="Surfs Up Burrito">
        <div class="content">
          <h3>Surfs Up . . . . . . $15</h3>
          <p>Mexican rice, lettuce, Cheese, Peppers, Caramelized Onions, Steak, shrimp, Avocado</p>
          <button @click="handleAddToCart({ name: 'Surfs Up Burrito', price: 15 })" class="white-btn">
            Add to Order
          </button>
        </div>
      </aside>
      </div>
    </section>
  </section>
</template>

<style scoped>
section.Menu2 {
  background-color: #DC6327;
  padding: 3rem 0 ;

  h2 {
    font-size: 27px;
    font-family: "PT Sans", sans-serif;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: #FFFAEB;
  }

  section.burritos {
    aside {
      display: flex;
      flex-direction: row;
      padding: 20px;

      div.content {
        display: flex;
        flex-direction: column;
        padding-left: 2rem;

        button.white-btn{
          width: 45%;
          font-size: 9px;
          white-space: nowrap;
        }

        h3 {
          font-size: 15px;
          color: #FFFAEB;
        }

        p {
          font-size: 13px;
          text-transform: capitalize;
          color: #FFFAEB;
          text-align: left;
        }
      }
    }
  }

  img {
    width: 40%;
    height: auto;
    border-radius: 14px;
    border-right: solid 8px #1D84A6;
    border-bottom: solid 8px #1D84A6;
  }
}

@media screen and (min-width: 600px) {
  section.burritos {
    display: flex;

    div.column {
      flex-direction: column;

      aside {
        align-items: center;
        flex-direction: column;
        padding-bottom: 5rem;

        img {
          width: 40%;
          height: auto;
        }

        div.content {
          padding-top: 1rem;
          width: 45%;
          display: flex;
          flex-direction: column;

          button.white-btn{
            width: 40%;
            font-size: 12px;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>