'use strict'
import Vue from 'vue'
import headermenu from '../headermenu/headermenu.vue'
import axios from 'axios'
export default {
  data: () => ({
    baseImageUrl: process.env.cloudinaryImageUrl,
    draftData: [],
    urlArray: process.env.LiveAPI + 'articles/status/submited/*/',
    username: null,
    image: null,
    displayname: null,
    loadcount: 3,
    totalcount: 0
  }),
  components: {
    headermenu
  },
  methods: {
    articleLoadMore: function (total) {
      let _this = this
      axios.get(_this.urlArray + _this.loadcount + '/' + _this.totalcount)
        .then((res) => {
          this.draftData.push(...res.data)
          this.totalcount += res.data.length
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    let _this = this
    if (Vue.localStorage.get('user')) {
      _this.displayname = JSON.parse(Vue.localStorage.get('user')).display_name
      _this.username = JSON.parse(Vue.localStorage.get('user')).username
      _this.image = JSON.parse(Vue.localStorage.get('user')).profileImagePreference
      axios.get(_this.urlArray + _this.loadcount + '/' + _this.totalcount)
        .then((res) => {
          _this.draftData = res.data
          _this.totalcount = res.data.length
        })
        .catch(e => {
          console.log(e)
        })
    } else {
      this.$router.push('/')
    }
  }
}
