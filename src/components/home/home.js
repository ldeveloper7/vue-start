'use strict'
import Vue from 'vue'
import headermenu from '../headermenu/headermenu.vue'
import axios from 'axios'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

export default {
  components: {
    headermenu
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
      placeimage: [
        {src: 'http://via.placeholder.com/850x440', title: '1'},
        {src: 'http://via.placeholder.com/850x440', title: '2'}
      ]
    }
  },

  mounted () {
    axios.get(process.env.LiveAPI + 'articles' + '/' + this.articleLoadCount + '/' + this.articleTotalCount)
      .then((res) => {
        this.articleData = res.data
      })
      .catch(e => {
        console.log(e)
      })

    axios.get(process.env.LiveAPI + 'articles/type/video/2')
      .then((res) => {
        this.videoData = res.data
      })
      .catch(e => {
        console.log(e)
      })
    axios.get(process.env.LiveAPI + 'articles/categories/community-submitted/3')
      .then((res) => {
        this.communityData = res.data
      })
      .catch(e => {
        console.log(e)
      })
  },
  methods: {
    articleLoadMore: function (total) {
      let _this = this
      // console.log(this.$data.articleTotalCount)

      axios.get(process.env.LiveAPI + 'articles/' + _this.articleLoadCount + '/' + (_this.articleTotalCount + total))
        .then((res) => {
          this.articleData.push(...res.data)
          this.articleTotalCount += res.data.length
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
