'use strict'
import Vue from 'vue'
import headermenu from '../headermenu/headermenu.vue'
import axios from 'axios'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

export default {
  data: () => ({
    baseImageUrl: process.env.cloudinaryImageUrl,
    draftData: [],
    submittedData: [],
    publishedData: [],
    scheduledData: [],
    urlArray: [process.env.LiveAPI + 'articles/3/0', process.env.LiveAPI + 'articles/3/0', process.env.LiveAPI + 'articles/3/0', process.env.LiveAPI + 'articles/3/0'],
    username: null,
    image: null,
    displayname: null,
    loadcount: 3,
    totalcount1: 0,
    totalcount2: 0,
    totalcount3: 0,
    totalcount4: 0
  }),
  components: {
    headermenu
  },
  methods: {

    loadMore (total, postname) {
      let _this = this
      switch (postname) {
        case 'draft_post':
          axios.get(process.env.LiveAPI + 'articles/' + _this.loadcount + '/' + (_this.totalcount1 + total))
            .then((res) => {
              _this.draftData.push(...res.data)
              _this.totalcount1 += res.data.length
            })
          break

        case 'submit_review_post':
          axios.get(process.env.LiveAPI + 'articles/' + _this.loadcount + '/' + (_this.totalcount2 + total))
            .then((res) => {
              _this.submittedData.push(...res.data)
              _this.totalcount2 += res.data.length
            })
          break

        case 'publish_post':
          axios.get(process.env.LiveAPI + 'articles/' + _this.loadcount + '/' + (_this.totalcount3 + total))
            .then((res) => {
              _this.publishedData.push(...res.data)
              _this.totalcount3 += res.data.length
            })
          break

        case 'schedule_post':
          axios.get(process.env.LiveAPI + 'articles/' + _this.loadcount + '/' + (_this.totalcount4 + total))
            .then((res) => {
              _this.scheduledData.push(...res.data)
              _this.totalcount4 += res.data.length
            })
          break

        default:
          axios.get(process.env.LiveAPI + 'articles/' + _this.loadcount + '/' + (_this.totalcount1 + total))
            .then((res) => {
              _this.draftData.push(...res.data)
              _this.totalcount1 += res.data.length
            })
          break
      }
    }
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
    } else {
      this.$router.push('/')
    }
  }
}
