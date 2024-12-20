<script>
export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        name: "",
        email: "",
        number: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form Submitted:", this.form);

      this.form = {
        name: "",
        email: "",
        number: "",
        message: "",
      };

      alert("Thank you for contacting Localz Cafe!");
    },
  },
};
</script>

<template>
  <section class="container">
  <section class="contact-us">
    <h2>Contact Us</h2>
    <p>Send us a message and we will get back to you as soon as possible.</p>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" placeholder="Enter your name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required />
      </div>

      <div class="form-group">
        <label for="number">Phone Number</label>
        <input type="tel" id="number" v-model="form.number" placeholder="Enter your phone number" />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" placeholder="Enter your message" required></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </section>
  </section>
</template>

<style scoped>
section.container {
  background: #DC6327;

  section.contact-us {
    padding: 2rem;
    background-color: #DC6327;
    border-radius: 8px;
    max-width: 600px;
    margin: 2rem auto;

    h2 {
      text-align: center;
      font-family: "PT Sans", sans-serif;
      color: #FFFAEB;
    }

    p{
      text-align: center;
      color: #FFFAEB;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    div.form-group {
      display: flex;
      flex-direction: column;

      label {
        font-family: "Arial", sans-serif;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #FFFAEB;
      }

      input,
      textarea {
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
      }
    }

    button {
      padding: 0.75rem;
      border: none;
      background-color: #1D84A6;
      color: white;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #213547;
    }
  }
}

@media screen and (min-width: 600px) {
  section.container{
    padding: 3rem 0;
    section.contact-us {
      background: #FFFAEB;
      h2{
        color: #1a1a1a;
      }
      p{
        color: #1a1a1a;
      }
      div.form-group{
        label {
          color: #1a1a1a;
        }
      }
    }
  }
}

</style>
