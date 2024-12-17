<script setup>

</script>

<template>
  <h2>Sweatshirts</h2>

  <section class="sweatshirt">

    <aside class="top">
      <div class="card">
        <img src="../assets/web/shredder-hoodie.jpg" alt="sweatshirt">
        <h3>Localz shredder hoodie</h3>
        <p>$50.00</p>
        <div class="colors">
          <img src="../assets/black.png" alt="black">
          <img src="../assets/grey.png" alt="grey">
          <img src="../assets/orange.png" alt="orange">
          <img src="../assets/blue.png" alt="blue">
          <p>+4 colors</p>
        </div>
        <router-link :to="{name:'Order'}" class="orange.btn">Add to bag</router-link>
      </div>

      <div class="card">
        <img src="#" alt="sweatshirt">
        <h3>Localz shredder hoodie</h3>
        <p>$50.00</p>
        <div class="colors">
          <img src="#" alt="color">
          <img src="#" alt="color">
          <img src="#" alt="color">
          <img src="#" alt="color">
          <p>+4 colors</p>
        </div>
        <router-link :to="{name:'Order'}" class="orange-btn">Add to bag</router-link>
      </div>
    </aside>

    <aside class="bottom">
      <div class="card">
        <img src="" alt="">
        <h3>Localz shredder hoodie</h3>
        <p>$50.00</p>
        <div class="colors">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <p>+4 colors</p>
        </div>
        <router-link :to="{name:'Order'}" class="orange-btn">Add to bag</router-link>
      </div>
    </aside>

  </section>
</template> -->

<style scoped>

section.sweatshirt {
  display: flex;
  flex-direction: column;

  aside.top {
    display: flex;

    div.card {
      display: flex;
      flex-direction: column;
    }
  }

  aside.bottom {
    display: flex;

    div.card {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>