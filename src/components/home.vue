<script setup>
import MainTemplate from "../templates/MainTemplate.vue";
import InfoBlock from "./InfoBlock.vue";
import MenuOptions from "./MenuOptions.vue";
import Create from "./create.vue";
import Location from "./location.vue";
import Reviews from "./Reviews.vue";
import Instagram from "./instagram.vue";
</script>

<template>
  <main-template>
    <section class="top">
      <div class="landing">
        <h1>Localz Cafe, Your Life Boat Meal</h1>
        <p>Localz Cafe is a local food truck based off Lake Minnetonka that sells the best
          tacos and burritos you need, for your perfect lake day.</p>
        <router-link :to="{ name: 'About'}" class="orange-btn">Learn more</router-link>
      </div>

      <div class="image">
        <img src="../assets/web/landing-hero.jpg" alt="tacos landing">
      </div>
    </section>

    <menu-options/>

    <info-block/>

    <create/>

    <section id="location">
    <location/>
    </section>

    <reviews/>

    <instagram/>

  </main-template>

</template>



<style scoped>
/*mobile first*/
section.top{
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding-left: 2rem;
  background-color: #DC6327;

  div.landing{
    flex-direction: column;
    width: 50%;
    h1{
      font-size: 20px;
      font-family: "PT Sans", sans-serif;
      margin-bottom: 2rem;
      color: #FFFAEB;
    }
    p{
      font-size: 10px;
      font-family: "Arial", sans-serif;
      color: #FFFAEB;
    }
    a{
      display: none;
    }
  }
  div.image{
    align-content: right;
    img{
      width: 100%;
      height: auto;
    }
  }
}


@media screen and (min-width: 600px) {
  section.top {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    padding-left: 2rem;
    background-color: #FFFAEB;

    div.landing {
      flex-direction: column;
      margin-left: 4rem;
      width: 20%;

      h1 {
        font-size: 48px;
        font-family: "PT Sans", sans-serif;
        margin-bottom: 2rem;
        color: #1a1a1a;
      }

      p {
        font-size: 18px;
        font-family: "Arial", sans-serif;
        margin-bottom: 4rem;
        color: #1a1a1a;
      }

      a {
        display: inline-block;
        background-color: #DC6327;
        color: #f9f9f9;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        text-transform: uppercase;
        font-weight: bold;
        text-decoration: none;
        font-size: 18px;
        font-family: "Arial", sans-serif;
      }
    }

    div.image {
      img {
        margin-left: 4rem;
        width: 110%;
        height: auto;
        border-radius: 50px;
        border-right: #DC6327 solid 30px;
        border-bottom: #DC6327 solid 30px;
      }

      padding-bottom: 6rem;
    }
  }
}

</style>