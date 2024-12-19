<script setup>

</script>

<template>
  <section class="container">
  <h2>T-Shirts</h2>

  <section class="tshirt">

    <aside class="top">
      <div class="card">
        <img src="../assets/web/logo-shirt.jpg" alt="tshirt">
        <h3>Localz Retro Shirt</h3>
        <p>$45.00</p>
        <div class="colors">
          <img src="../assets/web/black.jpg" alt="black">
          <img src="../assets/web/grey.jpg" alt="grey">
          <img src="../assets/web/orange.jpg" alt="orange">
          <img src="../assets/web/blue.jpg" alt="blue">
          <p>+4 colors</p>
        </div>
        <router-link :to="{name:'Order'}" class="blue-btn">Add to bag</router-link>
      </div>

      <div class="card">
        <img src="../assets/web/localz-skele-tshirt.jpg" alt="shirt">
        <h3>Localz Skele Shirt</h3>
        <p>$35.00</p>
        <div class="colors">
          <img src="../assets/web/orange.jpg" alt="orange">
          <img src="../assets/web/blue.jpg" alt="blue">
          <img src="../assets/web/black.jpg" alt="black">
          <p>+4 colors</p>
        </div>
        <router-link :to="{name:'Order'}" class="blue-btn">Add to bag</router-link>
      </div>
    </aside>

    <aside class="bottom">
      <div class="card">
        <img src="../assets/web/surfsup-shirt.jpg" alt="shirt">
        <h3>Localz Surfs Up Print Shirt</h3>
        <p>$30.00</p>
        <div class="colors">
          <img src="../assets/web/black.jpg" alt="black">
          <img src="../assets/web/grey.jpg" alt="grey">
          <img src="../assets/web/orange.jpg" alt="orange">
          <img src="../assets/web/blue.jpg" alt="blue">
          <p>+4 colors</p>
        </div>
        <router-link :to="{name:'Order'}" class="blue-btn">Add to bag</router-link>
      </div>
      <div class="card">
        <img src="../assets/web/longsleeve-shirt.jpg" alt="shirt">
        <h3>Localz Surfs Up Long Sleeve</h3>
        <p>$50.00</p>
        <div class="colors">
          <img src="../assets/web/black.jpg" alt="black">
          <img src="../assets/web/grey.jpg" alt="grey">
          <img src="../assets/web/orange.jpg" alt="orange">
          <img src="../assets/web/blue.jpg" alt="blue">
          <p>+4 colors</p>
        </div>
        <router-link :to="{name:'Order'}" class="blue-btn">Add to bag</router-link>
      </div>
    </aside>

  </section>
  </section>
</template> -->

<style scoped>
section.container {
  background: #DC6327;
  padding: 3rem 0;

  h3 {
    font-size: 14px;
    margin-bottom: 1px;
    color: #f9f9f9;
  }

  p{
    color: #f9f9f9;
  }

  h2 {
    text-align: center;
    font-family: "PT Sans", sans-serif;
    text-transform: uppercase;
    color: #f9f9f9;
  }

  section.tshirt {
    display: flex;
    flex-direction: column;
    width: 100%;

    aside.top {
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

    aside.bottom {
      display: flex;
      flex-direction: row;
      padding-top: 1rem;
      margin-left: 0;

      div.card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 52%;

        img {
          width: 60%;
          height: auto;
          border-radius: 10px;
          border-right: 8px solid #1D84A6;
          border-bottom: 8px solid #1D84A6;
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
  aside.top {
    display: flex;
    justify-content: space-around;
  }

  div.card {
    max-width: 30%;
  }

  aside.bottom{
    display: flex;
    justify-content: space-around;
  }
}

</style>