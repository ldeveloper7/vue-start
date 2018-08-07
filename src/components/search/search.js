import headermenu from '../headermenu/headermenu.vue'
import trendingpost from '../trending-post/trending-post.vue'
import dailynewsletter from '../daily-newsletter/daily-newsletter.vue'
import axios from 'axios'
export default {
  data: () => ({
    query: '',
    totalcount: 0,
    totalsearchcount: 0,
    loadCount: 5,
    loadMoreButton: 1,
    info: [],
    txtsearch: '',
    cloudinaryImageUrl: process.env.cloudinaryImageUrl
  }),
  components: {
    headermenu,
    trendingpost,
    dailynewsletter
  },
  mounted () {
    this.query = this.$route.query.q
    this.loadmore()
  },
  watch: {
    $route () {
      this.totalcount = 0
      this.totalsearchcount = 0
      this.loadmore()
    }
  },
  methods: {
    loadmore: function () {
      let _this = this
      axios
        .get(process.env.LiveAPI + 'articles/search/' + (_this.txtsearch ? _this.txtsearch : _this.query) + '/' + (_this.totalcount) + '/' + _this.loadCount)
        .then(response => {
          if (response.data.length) {
            if (!this.totalcount) {
              this.info = (response.data)
            } else {
              this.info.push(...response.data)
            }
            this.totalcount = this.totalcount + response.data.length
            if (response.data.length < this.loadCount) {
              this.loadMoreButton = 0
            }
          } else {
            this.loadMoreButton = 0
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    search: function () {
      let _this = this
      axios
        .get(process.env.LiveAPI + 'articles/search/' + _this.txtsearch + '/' + (_this.totalsearchcount) + '/' + _this.loadCount)
        .then(response => {
          if (response.data.length) {
            if (!this.totalsearchcount) {
              this.info = (response.data)
            } else {
              this.info.push(...response.data)
            }
            this.totalsearchcount = this.totalsearchcount + response.data.length
            if (response.data.length < this.loadCount) {
              this.loadMoreButton = 0
            }
          } else {
            this.loadMoreButton = 0
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
