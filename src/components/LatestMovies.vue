<template>
<div >
	<div class="columns" v-for="group in movies">
		<div class="column is-4" v-for="movie in group">
			<div class="card">
				<div class="card-image">
					<figure class="image is-4by4">
						<img :src="fetchImage(movie.poster_path)" alt="Image">
					</figure>
				</div>

				<div class="card-content">
					<div class="media">
					
						<div class="media-content">
							<p class="title is-4">{{ movie.original_title }}</p>
							<p class="subtitle is-6">{{  movie.release_date }}</p>
						</div>

					</div>

					<div class="content">
					<p> {{ readMore(movie.overview) }} </p>
					<small class="rating">Rating: {{  movie.vote_average }}</small>
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
					this.movies = this.chunk(response.data.results,3);
					console.log(this.movies);
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
				let content = arr.slice(1, 25).join(" ");
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
		min-height: 850px;
	}
	.rating{
		color: #e91e63;
	}
</style>