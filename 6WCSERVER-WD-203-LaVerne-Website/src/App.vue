<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link id="font" class="navbar-brand float-left" to="/">LaVerne</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/menus">Menus</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/story">Our Story</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/location">Location</router-link>
          </li>
        </ul>
        <router-link class="nav-link" to="/reserve">
          <button type="button" class="btn btn-outline-dark">Reserve Now</button>
        </router-link>
      </div>
   </nav>
   <body>
   </body>
   <!-- Router view -->
   <div class="container mt-5">
     <router-view></router-view>
   </div>

 </div>
</template>


<style>
body {
  background-image: url('./assets/bg-1.png');
  background-repeat: no-repeat;
  background-size: cover;
}
#font{
  font-family: 'EFCO Godfrey', sans-serif;     
  font-size:xx-large;                            
}

</style>