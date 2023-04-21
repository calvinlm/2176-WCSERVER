<template>
  <div id="app">
    <header class="l-header">
            <h1></h1>
            <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo">{{ initials }}</a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#education" class="nav__link">Education</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>

        <main class="l-main">
            <!--===== HOME =====-->
            <section class="home bd-grid" id="home">
                <div class="home__data">
                    <h1 class="home__title">{{ msg }}<br>I am <span class="home__title-color">{{ name }}</span><br> Web Developer</h1>

                    <a href="#contact" class="button">Contact</a>
                </div>

                <div class="home__social">
                    <a href="https://linkedin.com/in/calvinlamadrid/" target=" " class="home__social-icon"><i class="bx bxl-linkedin"></i></a>
                    <a href="" class="home__social-icon"><i class='bx bxl-behance' ></i></a>
                    <a href="https://github.com/calvinlm" target = " " class="home__social-icon"><i class='bx bxl-github' ></i></a>
                </div>

                <div class="home__img">    
                    <img src="img/profile.png" alt="">
                </div>
            </section>

            <!--===== ABOUT =====-->
            <section class="about section " id="about">
                <h2 class="section-title">About</h2>

                <div class="about__container bd-grid">
                    <div class="about__img">
                        <img v-bind:src ="pfp">
                    </div>
                    
                    <div>
                        <h2 class="about__subtitle">{{ name }}</h2>
                        <p class="about__text"> An  Information Technology student majoring in Web Development from the Holy Angel University. He is an artistically inclined person who loves to see the creative side of websites. Creating and Designing is his passion. </p>           
                    </div>                                   
                </div>
            </section>

            <!--==== EDUCATION ====-->
            <section class="education section " id="education">
                <h2 class="section-title">Education</h2>

                <div class="edu__container bd-grid">
                    <div class="edu__img">
                      <img v-bind:src="hau_logo">
                      <img v-bind:src="soc_logo">
                    </div>
                    
                    <div>
                        <h2 class="edu__subtitle">Holy Angel University</h2><br>
                        <p class="edu__text">Bachelor of Science in Information Technology</p>
                        <p class="edu__text">Major in Web Development</p>
                        <p class="edu__text">2025</p><br>
                    </div> 
                    <div>
                      <div class="edu__container bd-grid">
                        <div class="edu__img">
                          <img v-bind:src="dba_logo">
                        </div>
                      </div>
                        <h2 class="edu__subtitle">Don Bosco Academy</h2>  
                        <p>Elementary - Senior Highschool</p>
                        <p class="edu__text">2009 - 2020</p>
                    </div>                                  
                </div>
            </section>

            <!--===== SKILLS =====-->
            <section class="skills section" id="skills">
                <h2 class="section-title">Skills</h2>

                <div class="skills__container bd-grid">          
                    <div>
                        <h2 class="skills__subtitle">Profesional Skills</h2>
                        <p class="skills__text">He is profecient on the fundamental skills needed in creating a website. Being a full-stack developer, he also has developed his skills on the back end side of programming.</p>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-html5 skills__icon'></i>
                                <span class="skills__name">HTML5</span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">90%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-css3 skills__icon'></i>
                                <span class="skills__name">CSS3</span>
                            </div>
                            <div class="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">80%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-javascript skills__icon' ></i>
                                <span class="skills__name">JAVASCRIPT</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">60%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxs-paint skills__icon'></i>
                                <span class="skills__name">PHP</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">75%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>              
                        <img src="img/skills.png" alt="" class="skills__img">
                    </div>
                </div>
            </section>

            <!--===== WORK =====-->
            <section class="work section" id="work">
                <h2 class="section-title">Work</h2>
                <p class="work__text">Currently working as a Freelancer</p>

                <div class="work__container bd-grid">
                    <div class="work__img">
                        <img src="img/1.jpg" alt="">
                    </div>
                    <div class="work__img">
                        <img src="img/2.jpg" alt="">
                    </div>
                    <div class="work__img">
                        <img src="img/3.jpg" alt="">
                    </div>
                    <div class="work__img">
                        <img src="img/4.jpg" alt="">
                    </div>
                    <div class="work__img">
                        <img src="img/5.jpg" alt="">
                    </div>
                    <div class="work__img">
                        <img src="img/6.jpg" alt="">
                    </div>
                </div>
            </section>

            <!--===== CONTACT =====-->
            <section class="contact section" id="contact">
                <h2 class="section-title">Contact</h2>

                <div class="contact__container bd-grid">
                    <form action="" class="contact__form">
                        <input type="text" placeholder="Name" class="contact__input">
                        <input type="mail" placeholder="Email" class="contact__input">
                        <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>
                        <input type="button" value="Enter" class="contact__button button">
                    </form>
                </div>
            </section>
        </main>

        <!--===== FOOTER =====-->
        <footer class="footer">
            <p class="footer__title">{{ initials }}</p>
            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
            </div>
            <p>&#169; 2023 copyright all right reserved</p>
        </footer>
  </div>
</template>

<script>
import pfp from "/Documents/Calvin/WEBSERVER/Finals/spa-resume/src/assets/resume-pic-final.png"
import hau_logo from "/Documents/Calvin/WEBSERVER/Finals/spa-resume/src/assets/hau-logo-circle.png"
import soc_logo from "/Documents/Calvin/WEBSERVER/Finals/spa-resume/src/assets/soc-hau-logo.png"
import dba_logo from "/Documents/Calvin/WEBSERVER/Finals/spa-resume/src/assets/dba-logo.png"

export default {
  name: 'app',
  data () {
    return {
      msg: 'Hi! Welcome to my Resume!',
      name: 'Calvin La Madrid',
      initials: 'CLM',
      pfp: pfp,
      hau_logo: hau_logo,
      soc_logo: soc_logo,
      dba_logo: dba_logo
    }
  }
}
</script>

