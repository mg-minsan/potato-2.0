<template>
	<nav class="nav is-primary">
		<div class="nav-left">
			<a class="nav-item">
			<h1 class="title logo"> Potato </h1>
			</a>
		</div>

		<div class="nav-center">
			
		</div>

		<!-- This "nav-toggle" hamburger menu is only visible on mobile -->
		<!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
		<span class="nav-toggle">
			<span></span>
			<span></span>
			<span></span>
		</span>

		<!-- This "nav-menu" is hidden on mobile -->
		<!-- Add the modifier "is-active" to display it on mobile -->
		<div class="nav-right nav-menu">
		</div>
	</nav>
</template>

<script>
	export default{

	}
</script>
<style scoped>
	.nav{
		background-color: #ffeb3b;
	}
	.logo{
		font-family: 'Indie Flower', cursive;
	}
</style>