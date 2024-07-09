<template>
  <div class="landingpage">
    <section class="land">
      <h1 class="main-logo">
        <img src="../assets/main_assets/logo-big.png" />
      </h1>
      <p class="description-logo">
        We are ...
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/landing.css";
</style>
