'use strict'
import Vue from 'vue'
import VueFilterDateFormat from 'vue-filter-date-format'
import headermenu from '../headermenu/headermenu.vue'
import axios from 'axios'
Vue.use(VueFilterDateFormat)

export default {
  data: () => ({
    baseImageUrl: process.env.cloudinaryImageUrl,
    draftData: [],
    userList: [],
    urlArray: process.env.LiveAPI + 'articles/pending-post/',
    username: null,
    image: null,
    displayname: null,
    selecteduser: '',
    loadcount: 3,
    totalcount: 0,
    selected_filter: {shortCode: 'submited', text: 'Post In Review'},
    filter: [
      {shortCode: 'submited', text: 'Post In Review'},
      {shortCode: 'rejected', text: 'Rejected Post'},
      {shortCode: 'publish', text: 'Approved Post'},
      {shortCode: 'draft', text: 'Draft Post'}
    ],
    fetchedLocale: '',
    setLocale: null
  }),
  components: {
    headermenu
  },
  methods: {
    articleLoadMore: function (total) {
      let _this = this
      axios.get(_this.urlArray + _this.loadcount + '/' + _this.totalcount, { headers: { token: Vue.localStorage.get('token') } })
        .then((res) => {
          _this.draftData.push(...res.data)
          _this.totalcount += res.data.length
        })
        .catch(e => {
          console.log(e)
        })
    },
    userListchangedValue: function (value) {
      let _this = this
      axios.get(process.env.LiveAPI + 'userSearch/50?search=' + value.key).then((res) => {
        _this.userList = {}
        console.log(_this.userList)
        _this.userList = res.data
      }).catch(e => {
        console.log(e)
      })
    }
  },
  mounted() {
    let _this = this
    if (!Vue.localStorage.get('user')) {
      _this.$router.push('/')
    }
    axios.all([
      axios.get(_this.urlArray + _this.loadcount + '/' + _this.totalcount, { headers: { token: Vue.localStorage.get('token') } }),
      axios.get(process.env.LiveAPI + 'userSearch/50?search=')
    ]).then(axios.spread(function (res1, res2) {
      _this.draftData = res1.data
      _this.totalcount = res1.data.length
      _this.userList = res2.data
    })).catch(e => {
      console.log(e)
    })
  }
}
