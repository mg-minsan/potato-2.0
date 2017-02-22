<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

      <main-nav></main-nav>
    <br/>
    <div class="container"> 
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import MainNav from './components/MainNav';

export default {
  name: 'app',
  components: {MainNav}
}
</script>

<style>
</style>
