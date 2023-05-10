<template>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Contact No.</th>
              <th>Number of people</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in customers" :key="customer._id">
              <td>{{ customer.name }}</td>
              <td>{{ customer.contact }}</td>
              <td>{{ customer.num }}</td>
              <td>{{ customer.time }}</td>
              <td>
                <router-link :to="{ name: 'edit', params: { id: customer._id }}" class="btn btn-success">Edit</router-link>
                <button @click.prevent="deleteCustomer(customer._id)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        customers: []
      };
    },
    created() {
  this.fetchCustomers();
},
methods: {
  fetchCustomers() {
    let apiURL = "http://localhost:4000/api/reserve";
    axios
      .get(apiURL)
      .then((res) => {
        this.customers = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
      deleteCustomer(id) {
        let apiURL = `http://localhost:4000/api/delete-reservation/${id}`;
        let indexOfArrayItem = this.customers.findIndex((i) => i._id === id);
        if (window.confirm("Do you really want to remove your reservation?")) {
          axios
            .delete(apiURL)
            .then(() => {
              this.customers.splice(indexOfArrayItem, 1);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    }
  };
  </script>
  
  <style>
  .btn-success {
    margin-right: 10px;
  }
  </style>
  