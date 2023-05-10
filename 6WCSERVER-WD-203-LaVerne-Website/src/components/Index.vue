<template>
    <div class="d-flex align-items-center justify-content-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1>Where Art and Cuisine Meet!</h1>
            <p>
              We invite you to indulge in our culinary creations while taking in the beauty of the art around you. Come and join us for a unique and unforgettable dining experience!
            </p>
            <router-link class="nav-link" to="/reserve">
                <button type="button" class="btn btn-outline-dark">Reserve Now</button>
            </router-link>
          </div>
          
          <div class="col-md-6 d-flex justify-content-center">
            <img
              src="https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt="Restaurant"
              class="img-fluid mb-3 align-self-center"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    p {
      text-align: justify;
    }

    h1{
    color: black;
    font-family: 'EFCO Godfrey', sans-serif;
                                                
    }
  
    .container {
      margin-top: 3em;
    }
  
    .row {
      height: 100%;
    }
  
    .col-md-6 {
      height: 100%;
    }
  
    img {
      border-radius: 10px;
    }
    
  </style>
  
