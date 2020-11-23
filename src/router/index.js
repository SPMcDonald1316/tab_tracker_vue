import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/Register'
import Login from '../components/Login'
import Songs from '../components/Songs/Songs'
import AddSong from '../components/AddSong'
import Song from '../components/ViewSong/Song'
import EditSong from '../components/EditSong'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs
  },
  {
    path: '/songs/add',
    name: 'songs-add',
    component: AddSong
  },
  {
    path: '/songs/:songId',
    name: 'song',
    component: Song
  },
  {
    path: '/songs/:songId/edit',
    name: 'song-edit',
    component: EditSong
  }
]

const router = new VueRouter({
  routes
})

export default router
