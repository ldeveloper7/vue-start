'use strict'
import Vue from 'vue'
import headermenu from '../headermenu/headermenu.vue'
import axios from 'axios'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

export default {
  data: () => ({
    baseImageUrl: 'https://res.cloudinary.com/blavity/image/upload/c_crop,g_center,w_auto,q_auto:best,g_south_east,x_0/',
    draftData: [],
    submittedData: [],
    publishedData: [],
    scheduledData: [],
    // url1: 'https://api.blavity.com/v1/articles/3/0',
    // url2: 'https://api.blavity.com/v1/articles/3/0',
    // url3: 'https://api.blavity.com/v1/articles/3/0',
    // url4: 'https://api.blavity.com/v1/articles/3/0',
    urlArray: ['https://api.blavity.com/v1/articles/3/0', 'https://api.blavity.com/v1/articles/3/0', 'https://api.blavity.com/v1/articles/3/0', 'https://api.blavity.com/v1/articles/3/0'],
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
    useNull () {
      return null
    }
    // postLoadMore: function (total) {
    //   debugger
    //   let _this = this
    //   _this.url1 = `https://api.blavity.com/v1/articles/` + _this.loadcount + `/ ` + (_this.totalcount + total)
    //   _this.url2 = `https://api.blavity.com/v1/articles/` + _this.loadcount + `/ ` + (_this.totalcount + total)
    //   _this.url3 = `https://api.blavity.com/v1/articles/` + _this.loadcount + `/ ` + (_this.totalcount + total)
    //   _this.url4 = `https://api.blavity.com/v1/articles/` + _this.loadcount + `/ ` + (_this.totalcount + total)
    //   _this.urlArray = [_this.url1, _this.url2, _this.url3, _this.url4]
    //   axios.all([
    //     axios.get(this.urlArray[0]).catch(null),
    //     axios.get(this.urlArray[1]).catch(null),
    //     axios.get(this.urlArray[2]).catch(null),
    //     axios.get(this.urlArray[3]).catch(null)
    //   ]).then(axios.spread(function (res1, res2, res3, res4) {
    //     _this.draftData.push(...res1.data)
    //     _this.submittedData.push(...res2.data)
    //     _this.publishedData.push(...res3.data)
    //     _this.scheduledData.push(...res4.data)
    //
    //     this.totalcount += res1.data.length
    //   }))
    // }
  },
  mounted () {
    let _this = this
    if (Vue.localStorage.get('user')) {
      _this.displayname = JSON.parse(Vue.localStorage.get('user')).display_name
      _this.username = JSON.parse(Vue.localStorage.get('user')).username
      _this.image = JSON.parse(Vue.localStorage.get('user')).profileImagePreference
      axios.all([
        axios.get(_this.urlArray[0]).catch(null),
        axios.get(_this.urlArray[1]).catch(null),
        axios.get(_this.urlArray[2]).catch(null),
        axios.get(_this.urlArray[3]).catch(null)
      ]).then(axios.spread(function (res1, res2, res3, res4) {
        _this.draftData = res1.data
        _this.submittedData = res2.data
        _this.publishedData = res3.data
        _this.scheduledData = res4.data
      }))
    }
  }
}
