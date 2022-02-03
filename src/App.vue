<template>
  <div class="app">
    <div class="content">
      <header class="header">
        <div class="wrapper">
          <div class="logo-container">
            <img
              :src="require('./assets/logo.png')"
              alt="logo"
              class="logo-img"
            />
          </div>
          <div class="header-nav-menu">
            <router-link to="/">Форма</router-link>
            <router-link to="/saved-details">Превью</router-link>
          </div>
        </div>
      </header>
      <section class="section-main">
        <div class="wrapper">
          <router-view />
        </div>
      </section>
    </div>
    <footer class="footer">
      <div class="wrapper">
        <p>all rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
@import "./styles.css";
</style>
