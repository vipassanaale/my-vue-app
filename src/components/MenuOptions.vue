<script setup>

</script>

<template>
  <h2>Menu Options</h2>
  <section class="top-menu">
    <aside>
      <router-link :to="{ name: 'Menu' }">
        <img src="../assets/spencer-davis-hs2076lrvKQ-unsplash.jpg" alt="tacos menu">
      </router-link>
      <p>Taco</p>
    </aside>


    <aside>
      <router-link :to="{ name: 'Menu' }">
        <img src="../assets/IMG_2931.jpg" alt="burritos">
      </router-link>
      <p>Burritos</p>
    </aside>


    <aside>
      <router-link :to="{ name: 'Menu' }">
        <img src="../assets/web/drinks.jpg" alt="jarritos bottles">
      </router-link>
      <p>Drinks</p>
    </aside>


    <aside class="order">
      <router-link :to="{ name: 'Menu' }">
        <img src="../assets/IMG_2939.jpg" alt="birria burritos">
      </router-link>
      <p>Order Now</p>
    </aside>
  </section>
</template>

<style scoped>
/*Phone First*/

h2 {
  text-align: center;
  font-size: 32px;
  font-family: "PT Sans", sans-serif;
}

section.top-menu {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  aside {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin-bottom: 2rem;

    p {
      text-align: center;
      font-family: "Arial", sans-serif;
      justify-content: space-between;
      font-weight: bold;
      font-size: 28px;
    }

    a {
      text-align: center;


      img {
        max-width: 40%;
        height: auto;
        border-radius: 100%;
        border: solid 7px #1D84A6;
      }
    }
  }

  aside.order {
    display: none;
  }
}

/* Tablet and up */
@media screen and (width > 600px) {
  section.top-menu {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;

    aside {
      flex-direction: column;
      width: 20%;
      text-align: center;

      img {
        max-width: 100%;
        margin-bottom: 1rem;
        flex-direction: row;
        border: solid 7px #1D84A6;
      }

      p {
        font-size: 22px;
      }
    }

    aside.order {
      display: unset;
    }
  }

  h2 {
    width: 100%;
    font-size: 36px;
    text-align: center;
    margin-bottom: 2rem;
  }
}

</style>