<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

      <main-nav></main-nav>
    <br/>
    <div class="container"> 
      <p class="control has-icon has-icon-left">
        <input class="input" type="text" placeholder="Text input" >
        <span class="icon is-small">
          <i class="fa fa-search"></i>
        </span>
        </p>
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
