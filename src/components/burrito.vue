<script setup>

</script>

<template>
  <section class="Menu2">
    <h2>Breakfast Burritos</h2>
    <section class="burritos">
      <aside>
        <img src="../assets/Localzburrito.jpg" alt="Localz Burrito">
        <div class="content">
          <h3>Localz Burrito . . . . . . $12</h3>
          <p>Hashbrowns, Eggs, cheese, choice of protien (bacon/sausage/soy chorizo/pork chorizo)</p>
        </div>
      </aside>

      <aside>
        <img src="../assets/northshore-burrito.jpg" alt="North Shore Burrito">
        <div class="content">
          <h3>North Shore Burrito . . . . . . $10</h3>
          <p>Hashbrowns, Eggs, Cheese, Peppers, Onions, Choice of Protein (bacon/sausage/soy chorizo/pork chorizo)</p>
        </div>
      </aside>

      <aside>
        <img src="../assets/Risengrindburrito.jpg" alt="Rise n Grind Burrito">
        <div class="content">
          <h3>Rise 'N Grind . . . . . . $14</h3>
          <p>French Fries, Eggs, Cheese, Peppers, Caramelized Onions, Pork Chorizo, Avocado</p>
        </div>
      </aside>

      <aside>
        <img src="../assets/web/surfsup-burrito.jpg" alt="Surfs Up Burrito">
        <div class="content">
          <h3>Surfs Up . . . . . . $15</h3>
          <p>Mexican rice, lettuce, Cheese, Peppers, Caramelized Onions, Steak, shrimp, Avocado</p>
        </div>
      </aside>
    </section>
    <p>
      <router-link :to="{name:'Order'}" class="white-btn">Order Now</router-link>
    </p>
  </section>
</template>

<style scoped>
section.Menu2 {
  background-color: #DC6327;
  padding: 2rem 0 ;

  h2 {
    font-size: 27px;
    font-family: "PT Sans", sans-serif;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: #FFFAEB;
  }
  p{
    text-align: center;
  }

  section.burritos {
    aside {
      display: flex;
      flex-direction: row;
      padding: 20px;

      div.content {
        display: flex;
        flex-direction: column;
        padding-left: 2rem;

        h3 {
          font-size: 15px;
          color: #FFFAEB;
        }

        p {
          font-size: 13px;
          text-transform: capitalize;
          color: #FFFAEB;
          text-align: left;
        }
      }
    }
  }

  img {
    width: 30%;
    height: auto;
    border-radius: 14px;
    border-right: solid 8px #1D84A6;
    border-bottom: solid 8px #1D84A6;
  }
}

@media screen and (min-width: 600px) {
  section.burritos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    aside {
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
        width: 50%;
      }
    }
  }
}
</style>