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
  <section class="menu3">
    <h2>Drinks</h2>
    <section class="drinks">
      <h3>Smoothies</h3> <br/>

      <aside>
        <img src="../assets/tropicalsmoothie.jpg" alt="tropical smoothie">
        <div class="content">
          <h4>Tropical . . . . . . $7</h4>
          <p>mango, peach, pineapple, coconut creamer, honey vanilla</p>
          <button @click="handleAddToCart({ name: 'Tropical Smoothie', price: 7 })" class="orange-btn">
            Add to Order
          </button>
        </div>
      </aside>

      <aside>
        <img src="../assets/hydratesmoothie.jpg" alt="hydrate smoothie">
        <div class="content">
          <h4>Hydrate . . . . . . $8</h4>
          <p>Watermelon, strawberry, banana, cucumber, mint, lime, coconut water</p>
          <button @click="handleAddToCart({ name: 'Hydrate Smoothie', price: 8 })" class="orange-btn">
            Add to Order
          </button>
        </div>
      </aside>

      <h3>Blended Coffees</h3> <br/>


      <aside>
        <img src="../assets/blendedbullet.jpg" alt="blended bullet">
        <div class="content">
          <h4>Blended Bullet . . . . . . $6</h4>
          <p>Cold brew coffee, banana, coconut creamer, honey</p>
          <button @click="handleAddToCart({ name: 'Blended Bullet Coffee', price: 6 })" class="orange-btn">
            Add to Order
          </button>
        </div>
      </aside>


      <br/><h3>Water &amp; Pop</h3><br/>


      <aside>
        <img src="../assets/jarritos.jpg" alt="jarritos">
        <div class="content">
          <h4>Jarritos . . . . . . . . . . . . . . . . . . . . . . . $6</h4>
          <p>Lime, mandarin, pineapple, guava</p>
          <button @click="handleAddToCart({ name: 'Jarrito', price: 6 })" class="orange-btn">
            Add to Order
          </button>
        </div>
      </aside>

      <aside>
        <img src="../assets/mexicancoke.jpg" alt="mexican coke">
        <div class="content">
          <h4>Mexican Coke / Sprite . . . . . . $3</h4>
          <button @click="handleAddToCart({ name: 'Mexican Soda', price: 3 })" class="orange-btn">
            Add to Order
          </button>
        </div>
      </aside>

      <aside>
        <img src="../assets/water.jpeg" alt="bottled water next to tacos">
        <div class="content">
          <h4>Bottled Water . . . . . . . . . . . . . . . $1</h4>
          <button @click="handleAddToCart({ name: 'Bottled Water', price: 1 })" class="orange-btn">
            Add to Order
          </button>
        </div>
      </aside>

    </section>
  </section>

</template>

<style scoped>

section.menu3 {
  padding: 2rem 0;

  h2 {
    font-size: 27px;
    font-family: "PT Sans", sans-serif;
    text-transform: uppercase;
    margin-bottom: 3rem;
    text-align: center;
    color: #1a1a1a;
  }

  p {
    text-align: center;
  }

  section.drinks {

    h3 {
      font-size: 18px;
      color: #DC6327;
      text-transform: uppercase;
      text-align: center;
      padding-top: 2rem;
    }

    aside {
      display: flex;
      flex-direction: row;
      padding: 20px;

      div.content {
        display: flex;
        flex-direction: column;
        padding-left: 2rem;

        h4 {
          font-size: 18px;
          color: #1a1a1a;
          font-family: "PT Sans", sans-serif;
        }

        p {
          font-size: 13px;
          text-transform: capitalize;
          color: #1a1a1a;
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

  img {
    width: 40%;
    height: auto;
    border-radius: 14px;
    border-right: solid 8px #1D84A6;
    border-bottom: solid 8px #1D84A6;
  }
}

@media screen and (min-width: 600px) {
  section.drinks {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    //padding-left: 4rem;

    h3 {
      font-size: 18px;
      color: #DC6327;
      text-transform: uppercase;
    }
  }

  aside {
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 100%;
      height: auto;
      margin-bottom: 1rem;
      border-radius: 14px;
    }

    div.content {
      padding-top: 1rem;
      text-align: left;

      h4 {
        font-size: 40px;
      }

      p {
        font-size: 20px;
      }
    }
  }
}

</style>