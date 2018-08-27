'use strict'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import category from '../components/category/category.vue'
import author from '../components/author/author.vue'
import singlearticle from '../components/singlearticle/singlearticle.vue'
import profile from '../components/profile/profile.vue'
import tag from '../components/tag/tag.vue'
import editpost from '../components/edit-post/editpost.vue'
import myposts from '../components/myposts/myposts.vue'
import post from '../components/post/post.vue'
import search from '../components/search/search.vue'
import login from '../components/login/login.vue'
import logout from '../components/logout/logout.vue'
import PageNotFound from '../components/404/404.vue'
import register from '../components/register/register.vue'
import authorSubmissions from '../components/authorSubmissions/authorSubmissions.vue'
import pendingpost from '../components/pending-post/pending-post.vue'
import videos from '../components/video/video.vue'
import video from '../components/singlevideo/singlevideo.vue'
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
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/:username/myposts',
      name: 'myposts',
      component: myposts
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout
    },
    {
      path: '/editpost/:editpost',
      name: 'editpost',
      component: editpost
    },
    {
      path: '/mail/verification/:verification',
      name: 'login',
      component: login
    },
    {
      path: '/authorSubmissions',
      name: 'authorSubmissions',
      component: authorSubmissions
    },
    {
      path: '/pending-post',
      name: 'pending-post',
      component: pendingpost
    },
    {
      path: '/videos',
      name: 'videos',
      component: videos
    },
    {
      path: '/video/:slug',
      name: 'video',
      component: video
    },
    {
      path: '/404',
      name: '404',
      component: PageNotFound
    },
    {
      path: '/:slug',
      name: 'SingleArticle',
      component: singlearticle
    },
    {
      path: '*',
      name: '404',
      component: PageNotFound
    }
  ],
  mode: 'history'
})
