<template>

	<div>
		<p class="control has-icon has-icon-left">
			<input @blur="clearInput" @keydown="getAnswer" class="input" type="text" placeholder="Search Movies"  v-model="question">
			<span class="icon is-small">
			<i class="fa fa-search" aria-hidden="true"></i>
			</span>
		</p>

		<div class="box suggestion" :class="{'is-active': hasValue()}">
		

			<div class="container wrapper">

				<div class="columns loading" v-if="loading">
					<!-- <div class="columns"> -->
					<div class="column is-half is-offset-one-quarter">
						<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
					</div>
				</div>
				<span v-if="results.length == 0" class="help is-danger "> Movie not found ......  </span>
				<div class="columns"  v-for="movie in results">
					<div class="column is-12">

						<!-- <router-link  @mousedown="redirectTo($event)" :to="{ name: 'movie', params: { id: movie.id}}"> -->
						<a :href="getRedirectUrl(movie.id)" @mousedown="redirectTo(movie.id)">
							<div class="media">
								<div class="media-left">
									<figure class="">
										<img :src="resources.getImage(movie.poster_path)" alt="Image" width="40">
									</figure>
								</div>
								<div class="media-content">
									<div class="content">
										<p>
											<strong> {{ movie.title }}</strong>
											<br>
											<small> {{  movie.overview }} </small>
										</p>
									</div>
								</div>
							</div>
							</a>
							</router-link>
						</div>
				</div>
			</div>
		</div>

	</div>

</template>
<script>
import _ from 'lodash';
import axios from 'axios';
import Resources from '../resources';
import router from '../router'

export default{
	router,
	data(){
		return {
			loading: false,
			search: "",
			answer: "",
			results: {},
			question: "",
			resources: new Resources
		}
	},
	methods:{
	redirectTo(event){
		router.push({name:'movie', params:{'id': event}});
	},
	getRedirectUrl(id){
		return '/#/movie/' + id;
	},
	clearInput(){
		this.question = "";
	},
		getAnswer: _.debounce(
			function () {
				this.answer = 'loading.....';
				this.loading = true;
				var vm = this;
				if(this.question.length > 0){
					axios.get(this.resources.searchMovie(this.question))
						.then(function (response) {
							vm.loading = false;
							// console.log(this.resources.searchMovie(this.question));
							vm.results = response.data.results;
						})
						.catch(function (error) {
							console.log(error);
						})
				}
			},
      500
      ),
		hasValue(){
			return this.question.length > 0;
		}
	}
}
	
</script>
<style scoped>
	
	.suggestion{
		margin-top: -10px;
		border-radius: 0;
		border-top: none;
		position: absolute;
		width: 100%;
		max-height: 500px;
		display: none;
		z-index: 1986;
		overflow: auto;
		overflow-x: hidden;
	}
	.wrapper{
		width: 100%;
		display: block;
	}
	.wrapper .media:hover{
		background-color: #f5f5f5;
	}
	.box.is-active{
		display: flex;
	}
	.loading i{
		display: table;
		margin: auto;
	}

</style>