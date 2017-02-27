<template>
	<diV>
		<div>
			<div class="columns">
				<div class="column is-3">
					<img :src="resources.getImage(movie.poster_path)"/>
				</div>
				<div class="column is-8">
					<h1 class="title is-1"> {{ movie.title }} </h1>
					<p class="subtitle is-6"> ({{ movie.release_date }}) </p>
					<br/>
					<p class="title is-5"> Synopsis </p>
					<p class=""> {{ movie.overview }} </p>
					<br/>
					<button class="button" @click="toggleTrailer()"> Show Trailer</button>
					<br/><br/>
					<div>
						<span v-for="genre in movie.genres" class="tag is-danger">
							<a> {{  genre.name }}  </a>
						</span>
					</div>
				</div>
			</div>

			<div class="columns">

				<div class="modal" :class="{'is-active': startTrailer}">
					<div class="modal-background"></div>
					<div class="modal-card">
						<div class="video-container">
							<iframe v-if="startTrailer" :src="getTrailerUrl()" width="640" height="385"
							allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen">
							</iframe>
						</div>
					</div>
					<button class="modal-close" @click="toggleTrailer()"></button>
				</div> 
			</div>
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
				trailer:{},
				resources: new Resources(),
				startTrailer: false,
			}
		},
		computed:{

		},
		watch: {
			'$route': function(){
			this.fetchData();
			}
		},
		methods:{
			getTrailerUrl(){
				return "https://www.youtube.com/embed/" + this.trailer.key;
			},
			toggleTrailer(){
				this.startTrailer = !this.startTrailer;
			},
			fetchData(){

				axios.get(this.resources.getMovieUrl(this.$route.params.id))
				.then(response => {
					this.movie = response.data;

				//this.resources.testRequest('get', this.resources.getMovieTrailer(this.movie.id));
			})
				.catch(errors => console.log(errors));
				// this.resources.testRequest('get',this.resources.getMovieUrl(this.$route.params.id));
				axios.get(this.resources.getMovieTrailer(this.$route.params.id))
				.then(response =>{
					let trailer = response.data.results;
					let lastTrailer = trailer[trailer.length-1];
					this.trailer = lastTrailer;
				});
			}
	},
	created(){
			axios.get(this.resources.getMovieUrl(this.$route.params.id))
			.then(response => {
				this.movie = response.data;
			})
			.catch(errors => console.log(errors));

			axios.get(this.resources.getMovieTrailer(this.$route.params.id))
			.then(response =>{
				let trailer = response.data.results;
				let lastTrailer = trailer[trailer.length-1];
				this.trailer = lastTrailer;
			});
		}
	}
</script>
<style scoped>
.tag a{
	color: #fafafa;
}
span.tag{
	margin-right: 10px;
}

</style>