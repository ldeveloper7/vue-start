import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import category from '../components/category/category.vue'
import resources from '../components/resources/resources.vue'
import events from '../components/events/events.vue'
import video from '../components/video/video.vue'
import user from '../components/user/user.vue'
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
      path: '/user/:id',
      name: 'user',
      component: user
    }
  ],
  mode: 'history'
})
