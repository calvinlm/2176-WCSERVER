<template>
    <div id="gallery">
        <h1>{{ title }}</h1><br>
        <h1>My first Single Page Application</h1><br>
        <div class="gallery__img">
            <div class="gridscroll">
                <h3>Home page</h3>
                <img v-bind:src="Home">
                <h3>About page</h3>
                <img v-bind:src="About">
                <h3>Education Background page</h3>
                <img v-bind:src="Edu">
                <h3>Skills page</h3>
                <img v-bind:src="Skills">
                <h3>Contact page</h3>
                <img v-bind:src="Contact">
            </div>
        </div>
    </div>
  </template>



  <script>
  import home_g from "/Documents/Calvin/WEBSERVER/Finals/finalprj/src/assets/Home.png"
  import about_g from "/Documents/Calvin/WEBSERVER/Finals/finalprj/src/assets/About.png"
  import edu_g from "/Documents/Calvin/WEBSERVER/Finals/finalprj/src/assets/Edu.png"
  import skills_g from "/Documents/Calvin/WEBSERVER/Finals/finalprj/src/assets/Skills.png"
  import contact_g from "/Documents/Calvin/WEBSERVER/Finals/finalprj/src/assets/contact.png"

  export default {
    name: 'Gallery',
    data () {
        return{
            title: 'Gallery',
            Home: home_g,
            About: about_g,
            Edu: edu_g,
            Skills: skills_g,
            Contact: contact_g
        }
    }
  }
  </script>

<style>
#gallery{
    width: 900px;
    display: inline-block;
}
img{
    width: 100%;
    display: inline-flex;
    border-style: solid;
    border-color: black;
}
h3{
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>