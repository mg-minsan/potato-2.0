import moment from 'moment';
import axios from 'axios';

class Resources{
	constructor(){

	}

	newMovies(page = 1 ){

		let date = this.byMonth();
		let url = "https://api.themoviedb.org/3/movie/upcoming?"
		+ this.apiKey()
		+ "&language=en-US"
		+"&page=" + page 
		return url;
	}

	byMonth(){

		let format = "YYYY-MM-DD";
		let now = moment();
		let to= now.format(format);
		now.subtract(1, 'months');
		let from= now.format(format);
		return {from, to};
	}
	discoverBase(){
		return "https://api.themoviedb.org/3/discover/movie?";
	}

	apiKey() {
		// from some 
		return "api_key=dcdb07467047fab5a15bfd545fbc912d";
	}

	getImage(filepath){
		if(filepath == null){
			return "https://placehold.it/300x450";
		}
		return "https://image.tmdb.org/t/p/w300" + filepath;
	}

	getMovieUrl(id){
		let url = "https://api.themoviedb.org/3/movie/" +
		       + id + "?"
		       + this.apiKey();
		 return url;

	}
	getMovieTrailer(id){
		let url = "https://api.themoviedb.org/3/movie/" +
		id + 
		"/videos?"
		+ this.apiKey();

		return url;
	}
	testRequest(type, url, data = null){
		axios[type](url, data)
		.then(response => console.log(response.data))
		.catch(errors => console.log(errors));
	}
}

export default Resources;