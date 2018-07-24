'use strict'
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

export default {
  data: () => ({
    sideNav: false,
    isLogin: false,
    menuItems: [
      {title: 'Login', link: '/login'},
      {title: 'News', link: '/categories/news'},
      {title: 'Resources', link: '/resources'},
      {title: 'Events', link: '/events'},
      {title: 'Videos', link: '/videos'}
    ],
    upperMenu: [],
    superadmin: [
      {title: 'MY POSTS', link: '/myposts'},
      {title: 'SCHEDULED POSTS', link: '/scheduledposts'},
      {title: 'Author Submissions', link: '/authorSubmissions'},
      {title: 'Pending Post', link: '/pending-post'},
      {title: 'Accounts', link: '/accounts'},
      {title: 'Profile', link: '/profile'},
      {title: 'SIGN OUT', link: '/logout'}
    ],
    editor: [
      {title: 'MY POSTS', link: '/myposts'},
      {title: 'SCHEDULED POSTS', link: '/myposts'},
      {title: 'Author Submissions', link: '/authorSubmissions'},
      {title: 'Profile', link: '/profile'},
      {title: 'SIGN OUT', link: '/logout'}
    ],
    subconauth: [
      {title: 'MY POSTS', link: '/myposts'},
      {title: 'SCHEDULED POSTS', link: '/myposts'},
      {title: 'Profile', link: '/profile'},
      {title: 'SIGN OUT', link: '/logout'}
    ]
  }),
  mounted () {
    if (Vue.localStorage.get('user')) {
      this.menuItems.push({title: 'Me', link: '/profile'})
      this.menuItems.push({title: 'Sign out', link: '/logout'})
      this.menuItems.shift()
      this.isLogin = true
      var username = JSON.parse(Vue.localStorage.get('user')).username
      var image = JSON.parse(Vue.localStorage.get('user')).profileImagePreference
      let rolevalue = JSON.parse(Vue.localStorage.get('user'))._role
      switch (rolevalue) {
        case '57db549862e4711c9dd1eed6':
        case '57db549862e4711c9dd1eed7':
          this.superadmin.push({title: `logged in as ` + username + ` <img src=` + image + ` height=30px width=30px>`, link: `/profile`})
          this.upperMenu = this.superadmin
          break

        case '57db549862e4711c9dd1eed8':
          this.editor.push({title: `logged in as ` + username + ` <img src=` + image + ` height=30px width=30px>`, link: `/profile`})
          this.upperMenu = this.editor
          break

        case '57db549862e4711c9dd1eed9':
        case '57db549862e4711c9dd1eeda':
        case '57db5b2762e4711c9dd1eedb':
          this.subconauth.push({title: `logged in as ` + username + ` <img src=` + image + ` height=30px width=30px>`, link: `/profile`})
          this.upperMenu = this.subconauth
          break

        default:
          this.upperMenu = this.superadmin
          break
      }
    } else {
      this.isLogin = false
    }
    // else {
    //   delete this.menuItems[0]
    // }
  }
}
