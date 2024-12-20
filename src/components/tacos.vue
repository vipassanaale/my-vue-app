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

  <h2>Tacos</h2>
  <section class="tacos">
    <aside>
      <img src="../assets/korean-taco.jpg" alt="Korean Chicken Tacos">
      <div class="content">
        <h3>Korean Chicken Tacos . . . . . . . .  $10</h3>
        <p>Gochujang chilli paste, cabbage, spring onion, sesame seeds</p>
        <button @click="handleAddToCart({ name: 'Korean Chicken Tacos', price: 10 })" class="orange-btn">
          Add to Order
        </button>
      </div>
    </aside>

    <aside>
      <img src="../assets/carnitas-tacos.jpg" alt="Carnitas Tacos">
      <div class="content">
        <h3>Carnitas Tacos . . . .  . . . . . . . . . . . . . $10</h3>
        <p>Cilantro, cheese, jalapeño mayo</p>
        <button @click="handleAddToCart({ name: 'Carnitas Tacos', price: 10 })" class="orange-btn">
          Add to Order
        </button>
      </div>
    </aside>

    <aside>
      <img src="../assets/birria-tacos.jpg" alt="Birria Tacos">
      <div class="content">
        <h3>Birria Tacos . . . . . . . . . $12</h3>
        <p>Cilantro, onion, cheese, side of consume</p>
        <button @click="handleAddToCart({ name: 'Birria Tacos', price: 12 })" class="orange-btn">
          Add to Order
        </button>
      </div>
    </aside>

    <aside>
      <img src="../assets/alpastor-tacos.jpg" alt="Al Pastor Tacos">
      <div class="content">
        <h3>Al Pastor Tacos . . . . . . . . . . . . . . . $12</h3>
        <p>Cilantro, Pineapples, onion</p>
        <button @click="handleAddToCart({ name: 'Al Pastor Tacos', price: 12 })" class="orange-btn">
          Add to Order
        </button>
      </div>
    </aside>
  </section>

</template>

<style scoped>

h2{
  font-size: 27px;
  font-family: "PT Sans", sans-serif;
  text-transform: uppercase;
  margin: 3rem 0 1rem 0;
  text-align: center;
}

section.tacos {
  margin-bottom: 3rem;

  aside{
    display: flex;
    flex-direction: row;
    padding: 20px;

    div.content{
      display: flex;
      flex-direction: column;
      padding-left: 2rem;

      h3{
        font-size: 15px;
      }
      p{
        font-size: 13px;
        text-transform: capitalize;
        text-align: left;
      }
      button.orange-btn{
        width: 45%;
        font-size: 9px;
        white-space: nowrap;
      }
    }
  }
}
img{
  width: 40%;
  height: auto;
  border-radius: 14px;
  border-right: solid 8px #1D84A6;
  border-bottom: solid 8px #1D84A6;
}

@media screen and (min-width: 600px) {
  section.tacos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-left: 2rem;

    aside {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      img{
        width: 40%;
        height: auto;
        border-radius: 14px;
      }

      div.content{
        padding-top: 1rem;
        text-align: left;
        margin-left: 0;
        width: 40%;

        button.orange-btn{
          width: 50%;
          font-size: 12px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>