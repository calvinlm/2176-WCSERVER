<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Reservation</h3>
            <form @submit.prevent="handleUpdateForm">
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
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            customer: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/edit-reservation/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.customer = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/update-reservation/${this.$route.params.id}`;
            axios.put(apiURL, this.customer).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>