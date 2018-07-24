'use strict'
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

export default {
  data: () => ({
    sideNav: false,
    isLogin: (Vue.localStorage.get('user')) ? true : false,
    menuItems: [
      {title: 'Login', link: '/login'},
      {title: 'News', link: '/categories/news'},
      {title: 'Resources', link: '/resources'},
      {title: 'Events', link: '/events'},
      {title: 'Videos', link: '/videos'}
    ],
    upperMenu: [
      {title: 'MY POSTS', link: '/myposts'},
      {title: 'SCHEDULED POSTS', link: '/myposts'},
      {title: 'SIGN OUT', link: '/logout'}
      // {title: 'logged in as ' + (Vue.localStorage.get('user')) ? Vue.localStorage.get('user').username : '', link: '/profile'}
    ]
  }),
  mounted () {
    if (Vue.localStorage.get('user')) {
      this.menuItems.push({title: 'Me', link: '/profile'})
      this.menuItems.push({title: 'Logout', link: '/logout'})
      this.menuItems.shift()
      this.isLogin = true
    } else {
      this.isLogin = false
    }
    // else {
    //   delete this.menuItems[0]
    // }
  }
}
