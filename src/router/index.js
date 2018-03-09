import Vue from 'vue'
import Router from 'vue-router'
import Books from 'view/books/books'
import Movies from 'view/movies/movies'
import Recommend from 'view/recommend/recommend'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '主页',
    redirect: '/movies'

  }, {
    path: '/movies',
    component: Movies
  }, {
    path: '/books',
    component: Books
  }, {
    path: '/recommend',
    component: Recommend
  }]
})
