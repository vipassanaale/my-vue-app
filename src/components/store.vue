<script setup>
import MainTemplate from "../templates/MainTemplate.vue";
import Sweatshirt from "./sweatshirt.vue";
import ProductsByCategory from "./productsByCategory.vue";
</script>

<template>
  <main-template>
    <section class="hero">
      <div class="center">
        <img src="../assets/web/store-hero.jpg">
      </div>
    </section>

    <products-by-category category="stickers"/>
    <products-by-category category="sweatshirts"/>
    <products-by-category category="t-shirts"/>
    <products-by-category category="hats"/>

    <sweatshirt/>

  </main-template>
</template>


<style scoped>
/*section.hero{
  align-items: center;
  display: inline-block;
  div.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding-right: 15px;

    img {
      width: 100%;
      height: auto;
      border-radius: 20px;
      border-bottom: solid #DC6327 10px;
      border-left: solid #DC6327 10px;
      border-right: solid #DC6327 10px;
    }
  }
}
@media screen and (min-width:  600px) {
  section.hero {
    div.center {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      padding-right: 50px;
      margin-bottom: 4rem;

      img {
        width: 100%;
        height: auto;
        border-radius: 20px;
        border-bottom: solid #DC6327 30px;
        border-left: solid #DC6327 30px;
        border-right: solid #DC6327 30px;
      }
    }
  }
}*/
</style>