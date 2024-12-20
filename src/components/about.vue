<script>
import MainTemplate from "../templates/MainTemplate.vue";

export default {
name: "About",
  components: {MainTemplate}
}
</script>

<template>
  <main-template>
    <section class="hero">
      <p><img src="../assets/web/aboutus-hero.jpg" alt="About us hero image"></p>
      <div class="content">
      <h1>Get to know us!</h1>
      <p>We are three Lake Minnetonka locals slinging breakfast burritos, tacos, smoothies, coffee, candy and more! Class of 2017 Minnetonka High School
        Alumni who’ve built a permanent passion for the lake culture and are stoked to give back and keep the locals fueled. Originating in the summer of 2020, every order is always made fresh, packed with nutritious ingredients, and is served up with the perfect char to deliver the ultimate crunch factor. We strive to help keep you moving no matter what the day may bring. Hungover? We can help with that. Need pre/post surf sesh grub to keep you riding all day? We got you! We are stoked to be apart of your day and keep it pushing.
        Life is better with a breakfast burrito!</p>
      </div>
    </section>
    <div class="images">
      <p><img src="../assets/web/about1.jpg" alt="food truck"></p>
      <p><img src="../assets/web/about2.jpg" alt="tacos"></p>
      <p><img src="../assets/web/about3.jpg" alt="burritos"></p>
    </div>
  </main-template>
</template>

<style scoped>
section.hero {
  display: flex;
  flex-direction: column;
  p {
    margin: unset;
    img {
      border-bottom: #DC6327 10px solid;
    }
  }
  div.content {
    h1 {
      text-align: center;
      font-family: "PT Sans", sans-serif;
      font-size: 24px;
      text-transform: uppercase;
      margin-bottom: 0;
    }

    p {
      padding: 1rem 2rem;
      font-family: "arial", sans-serif;
      font-size: 14px;
      text-align: center;
    }
  }
}
div.images{
  display: flex;
  flex-direction: column;
  text-align: center;
  img{
    width: 60%;
    border-radius: 10px;
  }
}

@media screen and (min-width: 600px){
  section.hero{
    p {
      text-align: center;
      img {
        width: 50%;
        height: auto;
        border-radius: 30px;
        border-left: 12px solid #DC6327;
        border-right: 12px solid #DC6327;
      }
    }
    div.content {
      padding: 0 18rem;
    }
  }
  div.images{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 3rem;

    img{
      width: 100%;
    }
  }
}
</style>