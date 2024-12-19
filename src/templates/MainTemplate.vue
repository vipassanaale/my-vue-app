<script setup>

</script>

<template>
  <section class="container">
    <header>
      <div class="nav-left">
        <router-link :to="{name: 'Menu'}">Tacos</router-link>
        <router-link :to="{name:'Menu'}">Burritos</router-link>
        <router-link :to="{name:'Menu'}">Drinks</router-link>
        <router-link :to="{name:'Menu'}">Catering</router-link>
      </div>

      <div class="nav-right">
        <a href="#">Find Us</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
        <a href="#">Order Online</a>
      </div>
    </header>

    <article>
      <slot></slot>
    </article>

    <footer>
      <div class="menu">
        <router-link to="{ name: 'menu' }">Menu</router-link>
        <p>Tacos</p>
        <p>Burritos</p>
        <p>Drinks</p>
      </div>

      <div class="store">
        <a href="store">Store</a>
        <p>Sweatshirts</p>
        <p>T-shirts</p>
        <p>Hats</p>
        <p>Stickers</p>
      </div>

      <div class="order">
        <a href="#">Order Online</a>
        <p>Find Us</p>
        <p>Contact</p>
        <p>About</p>
        <p>Catering</p>
      </div>

      <div class="hours">
        <a href="#">Hours</a>
        <p>Monday-Tuesday</p>
        <p>closed</p>
        <p>Wednesday-Sunday</p>
        <p>8AM - 12PM</p>
      </div>

      <div class="localz">
        <a href="#">Localz Cafe</a>
        <p><a href="#">5603 Manitou Rd <br> Minnetonka, MN 55331</a></p>
        <p><a href="#">+1 612 321-1297</a></p>
        <p><a href="#">localzburritos@gmail.com</a></p>
      </div>

      <div class="logo">
        <p></p>
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


    .logo {
      position: absolute;
    }

    div {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      position: relative;

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

      .logo {
        top: 0;
      }

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