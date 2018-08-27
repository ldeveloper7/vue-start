'use strict'
import axios from '../../../node_modules/axios/index'
import headermenu from '../headermenu/headermenu.vue'
import footermenu from '../Footer/Footer.vue'
export default {
  components: {
    headermenu, footermenu
  },
  data () {
    return {
      info: {},
      totalcount: 0,
      loadCount: 8,
      loadMoreButton: 1,
      cloudinaryImageUrl: process.env.cloudinaryImageUrl
    }
  },
  mounted () {
    this.loadmore()
  },
  watch: {
    $route () {
      this.totalcount = 0
      this.loadmore()
    }
  },
  methods: {
    loadmore: function () {
      axios.all([
        axios.get(process.env.LiveAPI + '/videos?category=founder_interviews&count=' + this.loadCount + '&sort=newer').catch(null),
        axios.get(process.env.LiveAPI + '/videos?category=startup&count=' + this.loadCount + '&sort=newer').catch(null),
        axios.get(process.env.LiveAPI + '/videos?category=latest&count=' + this.loadCount + '&sort=newer').catch(null),
        axios.get(process.env.LiveAPI + '/videos?category=tech_and_culture&count=' + this.loadCount + '&sort=newer').catch(null),
        axios.get(process.env.LiveAPI + '/videos?category=afrotech_2017&count=' + this.loadCount + '&sort=newer').catch(null)
      ]).then(axios.spread(function (res1, res2, res3, res4, res5) {
        this.info = res1.data
        this.info.push(...res2.data)
        this.info.push(...res3.data)
        this.info.push(...res4.data)
        this.info.push(...res5.data)
      })).catch(e => {
        console.log(e)
      })
    }
  }
}
