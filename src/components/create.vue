<script setup>

</script>

<template>
  <h2>Order Now</h2>
  <section class="create">
    <aside>
      <div class="one">
        <img src="../assets/tacosteps-01.png" alt="man putting tortillas on flat top">
        <div>
          <h3>Choose your shell</h3>
          <p>whole grain soft shells, plain corn tortillas, or Plain flour tortillas </p>
        </div>
      </div>

      <div class="two">
        <img src="../assets/tacosteps-02.png" alt="adding toppings to taco">
        <div>
          <h3>Choose your toppings</h3>
          <p>Korean chicken, birria, or pork carnitas</p>
        </div>
      </div>
    </aside>

    <aside>
      <div class="three">
        <img src="../assets/tacosteps-03.png" alt="adding sauce to taco">
        <div>
          <h3>Choose your sauce</h3>
          <p>Jalapeño mayo, spicy habanero chili, or mild tomato salsa</p>
        </div>
      </div>

      <div class="four">
        <img src="../assets/tacosteps-04.png" alt="taco">
        <div>
          <h3>Time to Eat!</h3>
          <p>Enjoy taco your taco, but don’t forget to grab a drink</p>
        </div>
      </div>
    </aside>
  </section>

  <p>
    <router-link :to="{ name: 'Order' }" class="orange-btn">
      Order Now
    </router-link>
  </p>

</template>

<style scoped>
/*mobile first*/
h2 {
  font-family: "PT Sans", sans-serif;
  font-size: 28px;
  text-align: center;
  margin-top: 2rem;
}

section.create {
  display: flex;
  flex-direction: column;
  justify-content: center;

  aside {
    display: flex;

    div {
      div {
        text-align: center;
        margin: 0 1rem;
      }
    }
  }

  h3 {
    font-size: 18px;
    font-family: "PT Sans", sans-serif;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    max-height: auto;
  }

  p {
    font-size: 14px;
    margin-bottom: 2rem;
    font-family: "Arial", sans-serif;
  }

}

p {
  text-align: center;

  a.orange-btn {
    text-align: center;
    margin-bottom: 2rem;
  }
}

@media screen and (min-width: 600px) {
  section.create {
    flex-direction: row;


    aside {
      display: flex;
      flex-direction: row;
      //flex-basis: 25%;
    }
  }
}

</style>