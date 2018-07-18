import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import news from '../components/news.vue'
import resources from '../components/resources.vue'
import events from '../components/events.vue'
import video from '../components/video.vue'
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
      path: '/news',
      name: 'news',
      component: news
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
    }
  ],
  mode: 'history'
})
