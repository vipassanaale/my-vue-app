<script setup>

</script>

<template>
  <section class="locations">
    <img src="../assets/location.png" alt="map of localz">
    <div class="details">
      <h3>Locations</h3>
      <p><strong>Monday - Tuesday:</strong> Closed</p>
      <p><strong>Wednesday - Sunday:</strong> 8 a.m. - 12 p.m.</p>
      <p><strong>Closed on all major holidays</strong></p>
      <p>Our typical location is Back Channel Brewery Co. on Lake Minnetonka, but our location does change often.
        Check out our schedule to find us during the week!</p>
      <a href="#">Schedule</a>
    </div>
  </section>
</template>

<style scoped>

/*mobile first*/
section.locations {
  background-color: #1D84A6;
  padding: 2rem;
  color: #FFFAEB;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

section.locations img {
  max-width: 100%;
  height: auto;
}

a {
  display: none;
}


@media screen and (min-width: 600px) {
  section.locations {
    flex-direction: row-reverse;
    text-align: center;
    align-items: flex-start;
    gap: 2rem;
    padding: 5rem;
  }

  section.locations img {
    flex: 1;
    max-width: 50%;
    border-radius: 10px;
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