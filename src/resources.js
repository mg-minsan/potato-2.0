import moment from 'moment';

class Resources{
	constructor(){

	}

	newMovies(){

		let date = this.byMonth();
		let url = this.discoverBase() + this.apiKey() + 
		"&language=en-US" +
		"&sort_by=popularity.desc" +
		"&page=2" +
		"&region=US" +
		"&primary_release_date.gte=" + date.from+
		"&primary_release_date.lte=" + date.to;
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
		return "api_key=dcdb07467047fab5a15bfd545fbc912d"
	}

	getImage(filepath){
		return "https://image.tmdb.org/t/p/w300" + filepath;
	}

}

export default Resources;