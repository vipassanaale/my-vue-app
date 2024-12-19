<script setup>

</script>

<template>
  <section class="instagram">
    <div class="instagram">
      <h3>Find Us on Instagram</h3>
      <p>Check us out on Instagram and make sure to keep those notifications on and ready to watch out for special promotions and events we hold on weekends!</p>
      <p><strong>Don’t forget to tag us with the hashtag #localzcafe! </strong></p>
      <a class="orange-btn" href="#">Instagram</a>
    </div>
    <div class="pictures">
      <img src="../assets/IG1.png" alt="feed">
      <img src="../assets/IG2.png" alt="feed">
      <img src="../assets/IG3.png" alt="feed">
      <img src="../assets/IG4.png" alt="feed">
      <img src="../assets/IG5.png" alt="feed">
      <img src="../assets/IG6.png" alt="feed">
    </div>
  </section>
</template>

<style scoped>
/*mobile first*/
section.instagram {
  padding: 2rem;
  color: #1a1a1a;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  div.instagram a.orange-btn {
    display: inline-block;
  }

  div.pictures{
    img{
      max-width: 100%;
      height: auto;
      padding: 2px;
    }
  }

}



@media screen and (min-width: 600px) {
  section.instagram {
    flex-direction: row;
    text-align: center;
    align-items: flex-start;
    gap: 2rem;
    padding: 5rem;
  }

  div.instagram {
    flex: 1;
    flex-direction: column;
    margin: 2rem;
  }

  div.pictures {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 10px;
    flex: 1;
  }

  div.pictures img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

}

</style>