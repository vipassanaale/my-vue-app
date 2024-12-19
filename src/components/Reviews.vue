<script setup>

</script>

<template>
  <section class="reviews">
    <img src="../assets/IMG_2939.jpg" alt="taco">
    <div class="details">
      <h3>Reviews</h3>
      <p>“The best burritos! You have to check out this place, their food is so flavorful and packed full with ingredients. Definitely a must visit if you are in the area. Our families favorite spot for lunch during a day at the lake!”
        ~ Nicholas P.</p>
    </div>
  </section>
</template>

<style scoped>
/*mobile first*/
section.reviews {
  padding: 2rem;
  color: #1a1a1a;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

section.reviews img {
  max-width: 50%;
  height: auto;
  border-radius: 20px;
  border-bottom: #DC6327 solid 10px;
  border-left: #DC6327 solid 10px;
}


@media screen and (min-width: 600px) {
  section.reviews {
    flex-direction: row;
    text-align: center;
    align-items: flex-start;
    gap: 2rem;
    padding: 5rem;
  }

  section.reviews img {
    flex: 1;
    max-width: 35%;
    height: auto;
    border-radius: 40px;
    border-bottom: #DC6327 solid 20px;
    border-left: #DC6327 solid 20px;
  }

  div.details {
    flex: 1;
    flex-direction: column;
    margin: 2rem;
  }
  a {
    display: inline-block;
    background-color: #f9f9f9;
    color: #1D84A6;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    font-size: 18px;
    font-family: "Arial", sans-serif;
  }
}
</style>