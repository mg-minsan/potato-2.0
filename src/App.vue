<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

      <main-nav></main-nav>
    <br/>
    <div class="container"> 
      <latest-movies></latest-movies>
    </div>

  </div>
</template>

<script>
import LatestMovies from './components/LatestMovies';
import MainNav from './components/MainNav';

export default {
  name: 'app',
  components: {LatestMovies, MainNav}
}
</script>

<style>
</style>
