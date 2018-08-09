import headermenu from '../headermenu/headermenu.vue'
import trendingpost from '../trending-post/trending-post.vue'
import dailynewsletter from '../daily-newsletter/daily-newsletter.vue'
import axios from 'axios'
export default {
  data: () => ({
    totalcount: 0,
    totalsearchcount: 0,
    loadCount: 5,
    loadMoreButton: 0,
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
    this.txtsearch = this.$route.query.q
    this.loadmore()
  },
  methods: {
    loadmore: function (flag = 0) {
      let _this = this
      axios
        .get(process.env.LiveAPI + 'articles/search/' + (_this.txtsearch) + '/' + (_this.totalcount) + '/' + _this.loadCount)
        .then(response => {
          if (response.data.length) {
            if (flag) {
              this.info = response.data
            } else {
              this.info.push(...response.data)
            }
            this.totalcount = this.totalcount + response.data.length
            if (response.data.length < this.loadCount) {
              this.loadMoreButton = 0
            } else {
              this.loadMoreButton = 1
            }
          } else {
            this.loadMoreButton = 0
            if (flag) {
              this.info = []
            }
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    search: function () {
      let _this = this
      _this.totalcount = 0
      _this.loadmore(1)
    }
  }
}
