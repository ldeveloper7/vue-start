'use strict'
import Vue from 'vue'
import headermenu from '../headermenu/headermenu.vue'
import trendingpost from '../trending-post/trending-post.vue'
import dailynewsletter from '../daily-newsletter/daily-newsletter.vue'
import axios from 'axios'
import VueLocalStorage from 'vue-localstorage'
import vueHeadful from 'vue-headful';
Vue.component('vue-headful', vueHeadful);
import footermenu from '../Footer/Footer.vue'
Vue.use(VueLocalStorage)
export default {
  components: {
    headermenu,
    trendingpost,
    dailynewsletter,
    footermenu
  },
  data () {
    return {
      fetchLatestNews: [],
      articleLoadCount: 10,
      articleTotalCount: 0,
      cloudinaryImageUrl: process.env.cloudinaryImageUrl,
      videoData: [],
      articleData: [],
      communityData: [],
      valid: true,
      name: '',
      email: '',
      placeimage: [
        {src: 'http://via.placeholder.com/850x440', title: '1'},
        {src: 'http://via.placeholder.com/850x440', title: '2'}
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  mounted () {
    let _this = this
    axios.all([
      axios.get(process.env.LiveAPI + 'articles?' + 'featured=true&' + 'count=' + _this.articleLoadCount).catch(null),
      axios.get(process.env.LiveAPI + 'videos?sort=newer&count=2').catch(null),
      axios.get(process.env.LiveAPI + 'resources?sort=newer&count=3').catch(null)
    ]).then(axios.spread(function (res1, res2, res3) {
      _this.articleData = res1.data
      _this.videoData = res2.data
      _this.communityData = res3.data
    })).catch(e => {
      console.log(e)
    })
  },
  methods: {
    articleLoadMore: function (total) {
      let _this = this
      axios.get(process.env.LiveAPI + 'articles?' + 'featured=true&' + 'count=' + (_this.articleData.length + _this.articleLoadCount) )
        .then((res) => {
          _this.articleData.push(...res.data)
          _this.articleTotalCount += res.data.length
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
