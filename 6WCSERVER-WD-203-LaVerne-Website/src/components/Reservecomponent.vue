<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-left">Reservation</h1><br>
        <form @submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="customer.name" name="name" required>
          </div>
          <div class="form-group">
            <label>Contact No.</label>
            <input type="text" class="form-control" v-model="customer.contact" name="contact" required>
          </div>
          <div class="form-group">
            <label>Number of people</label>
            <input type="text" class="form-control" v-model="customer.num" name="number" required>
          </div>
          <div class="form-group">
            <label>Time</label>
            <input type="text" class="form-control" v-model="customer.time" name="time" required>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-outline-dark">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </template>

  <style>
h1 {
  font-family: 'EFCO Godfrey', sans-serif;
  color: black;                                             
}
</style>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        customer: {
          name: "",
          contact: "",
          num: "",
          time: ""
        }
      };
    },
    methods: {
      handleSubmitForm() {
        const apiURL = "http://localhost:4000/api/reserve-customer";
  
        axios.post(apiURL, this.customer)
          .then(() => {
            this.$router.push("/view");
            this.customer = {
                name: "",
                contact: "",
                num: "",
                time: ""
            };
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
  </script>
  