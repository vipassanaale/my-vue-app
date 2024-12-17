<script setup>

</script>

<template>

<h2>Tacos</h2>
<section class="tacos">
  <aside>
    <img src="../assets/korean-taco.jpg" alt="Korean Chicken Tacos">
    <div class="content">
    <h3>Korean Chicken Tacos . . . $10</h3>
    <p>Gochujang chilli paste, cabbage, spring onion, sesame seeds</p>
    </div>
  </aside>

  <aside>
    <img src="../assets/carnitas-tacos.jpg" alt="Carnitas Tacos">
    <div class="content">
    <h3>Carnitas Tacos . . . . . . $10</h3>
    <p>Cilantro, cheese, jalapeño mayo</p>
    </div>
  </aside>

  <aside>
    <img src="../assets/birria-tacos.jpg" alt="Birria Tacos">
    <div class="content">
    <h3>Birria Tacos . . . . . . $12</h3>
    <p>Cilantro, onion, cheese, side of consume</p>
    </div>
  </aside>

  <aside>
    <img src="../assets/alpastor-tacos.jpg" alt="Al Pastor Tacos">
    <div class="content">
    <h3>Al Pastor Tacos . . . . . . $12</h3>
    <p>Cilantro, Pineapples, onion</p>
    </div>
  </aside>
</section>
  <p>
    <router-link :to=" { name: 'Order'}" class="orange-btn">Order Now</router-link>
  </p>
</template>

<style scoped>

h2{
  font-size: 27px;
  font-family: "PT Sans", sans-serif;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
}
p{
  text-align: center;
  margin-bottom: 3rem;
}
section.tacos {
 padding-left: 1rem;

  aside{
    display: flex;
    flex-direction: row;
    padding: 20px;

    div.content{
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      width: 80%;
      margin-left: 20px;

      h3{
        font-size: 15px;
      }
      p{
        font-size: 13px;
        text-transform: capitalize;
        text-align: left;
      }
    }
  }
}
img{
  width: 40%;
  height: auto;
  border-radius: 14px;
  border-right: solid 8px #1D84A6;
  border-bottom: solid 8px #1D84A6;
}

@media screen and (min-width: 600px) {
  section.tacos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-left: 2rem;

    aside {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      img{
        width: 40%;
        height: auto;
        border-radius: 14px;
      }

      div.content{
        padding-top: 1rem;
        text-align: left;
        margin-left: 0;
        width: 40%;
      }
    }
  }
}
</style>