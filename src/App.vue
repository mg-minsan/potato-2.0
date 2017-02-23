<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

      <main-nav></main-nav>
    <br/>
    <div class="container"> 
      <search-bar></search-bar>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import MainNav from './components/MainNav';
import SearchBar from './components/SearchBar';

export default {
  name: 'app',
  components: {MainNav, SearchBar}
}
</script>

<style>
</style>
