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
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

@import "./assets/css/navbar.css"
</style>
