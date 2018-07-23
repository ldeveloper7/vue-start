'use strict'
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

export default {
  data: () => ({
    // sideNav: false,
    // menuItems: [
    //   {title: 'Login', link: '/login'},
    //   {title: 'News', link: '/categories/news'},
    //   {title: 'Resources', link: '/resources'},
    //   {title: 'Events', link: '/events'},
    //   {title: 'Videos', link: '/videos'}
    // ]
  }),
  mounted () {
    if (Vue.localStorage.get('user')) {
      // this.menuItems.push({title: 'Logout', link: '/logout'})
      // this.menuItems.shift()
      // Vue.localStorage.removeItem('user')
      this.$localStorage.remove('user')
      this.$localStorage.remove('token')
      this.$router.push('/')
    }
  }
}
