'use strict'
export default {
  data: () => ({
    sideNav: false,
    menuItems: [
      {title: 'Login', link: '/login'},
      {title: 'News', link: '/categories/news'},
      {title: 'Resources', link: '/resources'},
      {title: 'Events', link: '/events'},
      {title: 'Videos', link: '/videos'}
    ]
  })
}
