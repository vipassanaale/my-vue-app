<script setup>
import MainTemplate from "../templates/MainTemplate.vue";
import Sweatshirt from "./sweatshirt.vue";
import tshirt from "./tshirt.vue"
import hat from "./hat.vue"
import sticker from "./sticker.vue"
</script>

<template>
  <main-template>
    <section class="hero">
      <div class="center">
        <img src="../assets/web/store-hero.jpg">
      </div>
    </section>

    <section id="sweatshirts">
    <sweatshirt/>
    </section>

    <section id="tshirts">
    <tshirt/>
    </section>

    <section id="hats">
    <hat/>
    </section>

    <section id="stickers">
    <sticker/>
    </section>

  </main-template>
</template>


<style scoped>
section.hero{
  align-items: center;
  display: inline-block;
  margin-bottom: 1rem;
  div.center {
    display: block;
    width: 95%;

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
        width: 150%;
        border-radius: 20px;
        border-bottom: solid #DC6327 30px;
        border-left: solid #DC6327 30px;
        border-right: solid #DC6327 30px;
      }
    }
  }
}
</style>