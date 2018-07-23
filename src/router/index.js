'use strict'
import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import category from '../components/category/category.vue'
import author from '../components/author/author.vue'
import resources from '../components/resources/resources.vue'
import events from '../components/events/events.vue'
import video from '../components/video/video.vue'
import singlearticle from '../components/singlearticle/singlearticle.vue'
import tag from '../components/tag/tag.vue'
import login from '../components/login/login.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Router)
Vue.use(Vuetify)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/categories/:category',
      name: 'category',
      component: category
    },
    {
      path: '/resources',
      name: 'resources',
      component: resources
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/videos',
      name: 'videos',
      component: video
    },
    {
      path: '/author/:author',
      name: 'author',
      component: author
    },
    {
      path: '/tag/:tag',
      name: 'tag',
      component: tag
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/:slug',
      name: 'SingleArticle',
      component: singlearticle
    }
  ],
  mode: 'history'
})
