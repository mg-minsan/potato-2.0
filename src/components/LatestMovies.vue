<template>
<div >
	<div class="columns" v-for="group in movies">
		<div class="column is-3" v-for="movie in group">
			<div class="card">
				<div class="card-image">
					<figure class="image">
						<img :src="fetchImage(movie.poster_path)" alt="Image" width="200">
					</figure>
				</div>

				<div class="card-content">
					<div class="media">
					
						<div class="media-content">
							<p class="is-medium">{{ movie.original_title }}</p>
							<p class="subtitle is-6"> <small>{{  movie.release_date }}</small> </p>
						</div>

					</div>

					<div class="content">
					<!-- <p> {{ readMore(movie.overview) }} </p> -->
					<small class="rating">Rating: {{movie.vote_average}}/10</small>
					<progress class="progress is-danger" :value="movie.vote_average" max="10">{{  movie.vote_average }} %</progress>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>
</div>
</template>

<script>
import axios from 'axios';
import Resources from '../resources';

	export default {
		data () {
			return {
				msg: "Latest",
				movies: {},
				resources: new Resources()
			}
		},
		methods: {
			fetchData(){
				axios.get(this.resources.newMovies())
				.then(response => {
					this.movies = this.chunk(response.data.results,4);
				})
				.catch(errors => console.log(errors));
			},

			chunk(arr, size){
				var groups = [], i;
				for (i = 0; i < arr.length; i += size) {
					groups.push(arr.slice(i, i + size));
				}
				return groups;
			},

			fetchImage(filepath){
				return this.resources.getImage(filepath);
			},
			readMore(text){
				let arr = text.split(" ");
				let content = arr.slice(1, 20).join(" ");
				return content + " .....";
			}
		},
		
		created() {
			this.fetchData()
		}
	}
</script>
<style scoped>
	.card{
		min-height: 550px;
	}
	.rating{
		color: #e91e63;
	}
	.card-image{
		text-align: center;
	}
	.card-image figure{
		display: inline-block;
	}
</style>