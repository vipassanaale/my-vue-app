<script setup>

</script>

<template>
  <h2>hello Sweatshirts</h2>

  <section class="sweatshirt">

    <aside class="top">
      <div class="card">
        <img src="../assets/web/shredder-hoodie.jpg" alt="sweatshirt">
        <h3>Localz shredder hoodie</h3>
        <p>$50.00</p>
        <div class="colors">
          <img src="../assets/web/black.jpg" alt="black">
          <img src="../assets/web/grey.jpg" alt="grey">
          <img src="../assets/web/orange.jpg" alt="orange">
          <img src="../assets/web/blue.jpg" alt="blue">
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
    flex-direction: row;

    div.card {
      display: flex;
      flex-direction: column;
      img{
        width: 50%;
        height: auto;
      }
      h3{
        font-size: 12px;
      }
      div.colors{
        display: flex;

        img{
          border-radius: 100px;
          width: 100%;
          height: auto;
        }
      }
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