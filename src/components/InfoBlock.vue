<script setup>

</script>

<template>
  <section class="info-block">
    <aside>
      <h3>Get to Know Us</h3>
      <p>Localz Cafe, established in the summer of 2020 by three Minnetonka High School graduates, aims to provide
        Lake Minnetonka visitors with fresh and delicious lake day meals. Our food is prepared with care, using
        nutritious ingredients and served with a perfect char. Find our current locations on our map!</p>
      <a class="white-btn" href="#">Read More</a>
    </aside>

    <aside>
      <img src="../assets/IMG_2933.jpg" alt="owners of Localz Cafe">
    </aside>

    <aside>
      <img src="../assets/frank-zhang-uZj6OAYPqrQ-unsplash.jpg" alt="catering image">
    </aside>

    <aside>
      <h3>Catering</h3>
      <p>In need of food for an event? We’ve gotcha covered! Whether it’s a quaint get-together or a large
        gathering, let us help you curate the best event possible. Our food truck brings the same fresh, delicious
        meals that have made us a local favorite to your special occasion.</p>
      <a class="white-btn" href="#">Order Catering</a>
    </aside>
  </section>
</template>

<style scoped>
/* Mobile first */
section.info-block {
  background-color: #DC6327;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 1rem 0;
  padding: 2rem;

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
      font-family: "PT Sans", sans-serif;
      font-size: 28px;
      color: #FFFAEB;
      margin-bottom: 2px;
    }

    p {
      text-align: center;
      font-family: "Arial", sans-serif;
      font-size: 14px;
      color: #FFFAEB;
      line-height: 1.6;
      margin-bottom: 3rem;
    }

    img {
      width: 100%;
      border-radius: 1rem;
    }
  }

  @media screen and (width > 600px) {
    flex-direction: row;
    flex-wrap: wrap;

    aside {
      flex-basis: 48%;

      p{
        font-size: 18px;
      }
    }
  }
}
</style>