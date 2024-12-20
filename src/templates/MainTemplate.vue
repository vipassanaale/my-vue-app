<script setup>

</script>

<template>
  <section class="container">
    <header>
      <div class="nav-left">
        <router-link :to="'/menu#tacos'">Tacos</router-link>
        <router-link :to="'/menu#burritos'">Burritos</router-link>
        <router-link :to="'/menu#drinks'">Drinks</router-link>
        <router-link :to="{name:'Store'}">Store</router-link>
      </div>

      <div class="nav-right">
        <router-link :to="'/about#contact'">Contact</router-link>
        <router-link :to="{name: 'About'}">About</router-link>
        <router-link :to="{name: 'Menu'}">Order</router-link>
        <router-link :to="{name:'Home'}" class="orange-btn">Home</router-link>
      </div>
    </header>

    <article>
      <slot></slot>
    </article>

    <footer>
      <div class="menu">
        <router-link :to="{ name: 'Menu' }">Menu</router-link>
        <router-link :to="'/menu#tacos'" class="lower">Tacos</router-link>
        <router-link :to="'/menu#burritos'" class="lower">Burritos</router-link>
        <router-link :to="'/menu#drinks'" class="lower">Drinks</router-link>
      </div>

      <div class="store">
        <router-link :to="{ name: 'Store'}">Store</router-link>
        <router-link :to="'/store#sweatshirts'" class="lower">Sweatshirts</router-link>
        <router-link :to="'/store#tshirts'" class="lower">T-shirts</router-link>
        <router-link :to="'/store#hats'" class="lower">Hats</router-link>
        <router-link :to="'/store#stickers'" class="lower">Stickers</router-link>
      </div>

      <div class="order">
        <router-link :to="{name:'Order'}">Order Details</router-link>
        <router-link :to="'/home#location'" class="lower">Find Us</router-link>
        <router-link :to="'/about#contact'" class="lower">Contact</router-link>
        <router-link :to="{name:'About'}" class="lower">About</router-link>
        <router-link :to="'/home#catering'" class="lower">Catering</router-link>
      </div>

      <div class="hours">
        <router-link :to="'/home#location'">Hours</router-link>
        <p>Monday-Tuesday</p>
        <p>closed</p>
        <p>Wednesday-Sunday</p>
        <p>8AM - 12PM</p>
      </div>

      <div class="localz">
        <router-link :to="{name:'Home'}">Localz Cafe</router-link>
        <p><a href="https://maps.app.goo.gl/pfDXCytwjaU99q3G6">5603 Manitou Rd <br> Minnetonka, MN 55331</a></p>
        <p><a href="tel:+16123211297">+1 612 321-1297</a></p>
        <p><a href="mailto:localzcafe@gmail.com">localzcafe@gmail.com</a></p>
      </div>
    </footer>
  </section>
</template>

<style scoped>
/* Mobile first */
section.container {
  background: #FFFAEB;
  max-width: 2500px;
  margin: 0 auto;

  header {
    background-color: #1D84A6;
    padding: 2rem;


    div {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      position: relative;
      align-items: center;

      a {
        color: white;
        text-transform: uppercase;
        font-family: "Arial", sans-serif;
        font-weight: bold;
        white-space: nowrap;
      }
    }

    div.nav-left {
      display: none;
    }
  }

  footer {
    display: flex;
    justify-content: space-around;
    background-color: #1D84A6;
    padding: 3rem;
    text-transform: uppercase;
    font-family: "Arial", sans-serif;
    font-weight: bold;


    div {
      //align-content: ;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    a {
      margin: 0;
      color: white;
    }
    a.lower{
      font-size: 11px;
    }



    p {
      margin: 0;
      color: white;
      font-size: 9pt;
    }

    div.menu {
      display: none;
    }

    div.order {
      display: none;
    }

    div.hours {
      display: none;
    }
  }

  /* Tablet and up */
  @media screen and (width > 800px) {
    header {
      display: flex;
      justify-content: space-between;

      > div {
        flex-basis: 40%;
        display: flex;
        justify-content: space-between;
      }

      div.nav-left {
        display: flex;
        margin-left: 6rem;
      }
    }

    footer {
      div.menu {
        display: flex;
        a{

        }
      }

      div.order {
        display: flex;
      }

      div.hours {
        display: flex;
      }
    }
  }

  @media screen and (width > 900px) {
    header {
      > div {
        flex-basis: 30%;
      }
    }
  }
}
</style>