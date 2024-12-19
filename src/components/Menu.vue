<script setup>
import MainTemplate from "../templates/MainTemplate.vue";
import tacos from "./tacos.vue";
import burrito from "./burrito.vue";
import drinks from "./drinks.vue";
</script>

<template>
  <main-template>
    <section class="hero">
      <div class="center">
        <img src="../assets/web/menu-hero.jpg">
      </div>
    </section>
    <tacos/>
    <burrito/>
    <drinks/>

  </main-template>
</template>

<style scoped>
section.hero{
  align-items: center;
  display: inline-block;
  padding-bottom: 2rem;
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
  section.hero{
    div.center {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      margin-bottom: 4rem;
      padding-left: 10rem;


      img {
        width: 250%;
        border-radius: 20px;
        border-bottom: solid #DC6327 30px;
        border-left: solid #DC6327 30px;
        border-right: solid #DC6327 30px;
      }
    }
  }
}
</style>
