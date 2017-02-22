import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import LatestMovies from 'components/LatestMovies'
import ShowMovie from 'components/ShowMovie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: LatestMovies
    },
    {
    	path: '/movie/:id',
    	name: 'movie',
    	component: ShowMovie
    }
  ]
})
