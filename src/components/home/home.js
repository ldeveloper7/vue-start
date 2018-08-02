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
      trending_articles: [],
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
      axios.get(process.env.LiveAPI + 'articles' + '/' + _this.articleLoadCount + '/' + _this.articleTotalCount).catch(null),
      axios.get(process.env.LiveAPI + 'articles/type/video/2').catch(null),
      axios.get(process.env.LiveAPI + 'articles/categories/community-submitted/3').catch(null),
      axios.get(process.env.LiveAPI + 'trending_articles').catch(null)
    ]).then(axios.spread(function (res1, res2, res3, res4) {
      _this.articleData = res1.data
      _this.videoData = res2.data
      _this.communityData = res3.data
      _this.trending_articles = res4.data
    })).catch(e => {
      console.log(e)
    })
  },
  methods: {
    articleLoadMore: function (total) {
      let _this = this
      axios.get(process.env.LiveAPI + 'articles/' + _this.articleLoadCount + '/' + (_this.articleTotalCount + total))
        .then((res) => {
          _this.articleData.push(...res.data)
          _this.articleTotalCount += res.data.length
        })
        .catch(e => {
          console.log(e)
        })
    },
    newsletter () {
      var headers = {
        'token': Vue.localStorage.get('token')
      }
      if (_this.$refs.form.validate()) {
        axios.post(process.env.LiveAPI + 'subscribe',
          {
            user: {
              'name': _this.name,
              'email': _this.email
            }
          }, {headers: headers})
          .then(res => {
            _this.clear()
          })
          .catch(e => {
            _this.clear()
          })
      }
    },
    clear () {
      _this.$refs.form.reset()
    }
  }
}
