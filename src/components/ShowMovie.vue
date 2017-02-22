<template>
	<div>
		<h1> movie </h1>	

		<div ref="container">
			<!-- <img v-lazy="resources.getImage(movie.poster_path)"/> -->
			<!-- <div v-lazy:background-image="resources.getImage(movie.poster_path)"></div> -->
			<!-- <img src='../assets/ring.gif'> -->
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import Resources from '../resources';
	export default{
		data(){
			return {
				movie: {},
				resources: new Resources(),
			}
		},
			created(){
			axios.get(this.resources.getMovieUrl(this.$route.params.id))
			.then(response => {
				this.movie = response.data;
			})
			// .catch(errors => console.log(errors));
			// this.resources.testRequest('get',this.resources.getMovieUrl(this.$route.params.id));
		}
	}
</script>