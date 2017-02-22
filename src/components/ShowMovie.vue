<template>
	<h1> movie </h1>	
</template>
<script>
import axios from 'axios';
import Resources from '../resources';
	export default{
		data(){
			return {
				resources: new Resources()
			}
		},
		created(){
			// axios.get(this.resources.getMovieUrl(this.$route.params.id))
			// .then(response => console.log(response.data))
			// .catch(errors => console.log(errors));
			this.resources.testRequest('get',this.resources.getMovieUrl(this.$route.params.id));
		}
	}
</script>