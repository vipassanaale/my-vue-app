<script setup>

</script>

<template>
  <section class="container">
    <h2>Hats</h2>

    <section class="hats">

      <aside>
        <div class="card">
          <img src="../assets/web/trucker-hat.jpg" alt="trucker hat">
          <h3>Localz Skeleton Trucker Hat</h3>
          <p>$35.00</p>
          <div class="colors">
            <img src="../assets/web/black.jpg" alt="black">
            <img src="../assets/web/grey.jpg" alt="grey">
            <img src="../assets/web/orange.jpg" alt="orange">
            <img src="../assets/web/blue.jpg" alt="blue">
            <p>+4 colors</p>
          </div>
          <router-link :to="{name:'Order'}" class="orange-btn">Add to bag</router-link>
        </div>

        <div class="card">
          <img src="../assets/web/panel-hat.jpg" alt="panel hat">
          <h3>Localz Skeleton 5-Pannel Hat</h3>
          <p>$35.00</p>
          <div class="colors">
            <img src="../assets/web/orange.jpg" alt="orange">
            <img src="../assets/web/blue.jpg" alt="blue">
            <img src="../assets/web/black.jpg" alt="black">
            <p>+4 colors</p>
          </div>
          <router-link :to="{name:'Order'}" class="orange-btn">Add to bag</router-link>
        </div>
      </aside>

    </section>
  </section>
</template> -->

<style scoped>
section.container {
  padding: 3rem 0;

  h2 {
    text-align: center;
    font-family: "PT Sans", sans-serif;
    text-transform: uppercase;

  }

  section.hats {
    display: flex;
    flex-direction: column;
    width: 100%;

    aside {
      display: flex;
      flex-direction: row;

      div.card {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        align-items: center;

        img {
          width: 75%;
          height: auto;
          border-radius: 10px;
          border-right: 8px solid #1D84A6;
          border-bottom: 8px solid #1D84A6;

        }

        h3 {
          font-size: 14px;
          margin-bottom: 1px;
        }

        div.colors {
          display: flex;
          gap: 4px;
          align-items: center;

          img {
            border-radius: 100px;
            width: 8%;
            height: 20%;
            border: none;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 600px) {
  aside {
    display: flex;
    justify-content: space-around;
  }

  div.card {
    max-width: 30%;
  }

}

</style>