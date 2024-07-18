<template>
  <header>
    <nav class="navbar">
      <div class="navbar_logo">
        <router-link to="/">
          <img src="./assets/main_assets/logo-small.png" />
        </router-link>
      </div>
      <ul class="navbar_menu">
        <li><router-link to="/about">About us</router-link></li>
        <li><router-link to="/publications">Publications</router-link></li>
        <li><router-link to="/members">Members</router-link></li>
      </ul>
    </nav>
  </header>
  <div class="wrapper">
    <router-view/>
    <br>
  </div>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">
            This is About.
          </p>
        </div>
        <div class="col-6 col-md-3">
          <h6>Categories</h6>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about/projects/VCM">VCM</router-link></li>
            <li><router-link to="/about/projects/FCM">FCM</router-link></li>
            <li><router-link to="/about/projects/ACoM">ACoM</router-link></li>
            <li><router-link to="/about/projects/3D_Avatar">3D Avatar</router-link></li>
            <li><router-link to="/about/projects/AICC">AICC</router-link></li>
          </ul>
        </div>
        <div class="col-6 col-md-3">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About us</router-link></li>
            <li><router-link to="/publications">Publications</router-link></li>
            <li><router-link to="/members">Members</router-link></li>
          </ul>
        </div>
      </div>
      <hr class="small"/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6 col-12">
          <p class="copyright-text">
            Copyright © 2024 All Rights Reserved by M4ML.
          </p>
        </div>
        <div class="col-md-8 col-sm-6 col-12">
          <p>Contact: jeongilseo@dau.ac.kr</p>
          <p>LAB: 동아대학교 공과대학1호관 424호(S03-424)</p>
          <p>Professor: 동아대학교 공과대학5호관 630호(S06-630)</p>
          <p>부산광역시 사하구 낙동대로 550번길 37(49315)</p>
          <ul class="social-icons">
            <li>
              <a href="https://github.com/Media-4-Machine-Laboratory"><i class="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

@import "./assets/css/navbar.css";
@import "./assets/css/wrapper.css";
@import "./assets/css/footer.css";
</style>
