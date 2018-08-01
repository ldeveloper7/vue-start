'use strict'
import headermenu from '../headermenu/headermenu.vue'
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
import ckeditor from 'vue-ckeditor2'
import axios from 'axios'
Vue.use(VueLocalStorage)
export default {
  data: () => ({
    opinion: true,
    description: '',
    categoryvalue: '',
    tagvalue: '',
    video: false,
    news: false,
    uploadvideoflag: false,
    videourlflag: false,
    image: '',
    title: 'opinion',
    sub_title: '',
    baseImageUrl: process.env.cloudinaryImageUrl,
    username: '',
    bodycontent: '',
    btnflag: false,
    config: {
      toolbar: [
        ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript']
      ],
      height: 300
    },
    categoryList: [],
    tagList: [],
    titletext: 'Article'
  }),
  components: {
    headermenu, ckeditor
  },
  methods: {
    opiniontab () {
      this.sub_title = ''
      this.title = 'Opinion'
      this.titletext = 'Article'
      this.video = false
      this.uploadvideoflag = false
      this.videourlflag = false
    },
    videotab () {
      this.sub_title = 'This post Could Definitely Be One Of them!'
      this.title = 'Video'
      this.titletext = 'Video'
      this.video = true
      this.videourlflag = true
    },
    newstab () {
      this.sub_title = 'This post Could Definitely Be One Of them!'
      this.title = 'News'
      this.titletext = 'Video'
      this.video = false
      this.uploadvideoflag = false
      this.videourlflag = false
    },
    onBlur (editor) {
      console.log(editor)
    },
    onFocus (editor) {
      console.log(editor)
    },
    categorychangedValue: function (value) {
      let _this = this
      axios.get(process.env.LiveAPI + 'category/50?search=' + value).then((res) => {
        _this.categoryList = res.data
      }).catch(e => {
        console.log(e)
      })
    },
    tagchangedValue: function (value) {
      let _this = this
      axios.get(process.env.LiveAPI + 'tags/50?search=' + value).then((res) => {
        _this.tagList = res.data
      }).catch(e => {
        console.log(e)
      })
    },
    previewFile: function () {
      var preview = document.querySelector('#imgpreview')
      var file = document.querySelector('input[type=file]').files[0]
      var reader = new FileReader()
      reader.addEventListener('load', function () {
        preview.src = reader.result
      }, false)

      if (file) {
        reader.readAsDataURL(file)
      }
      this.btnflag = true
    },
    uploadvideofunc: function () {
      this.uploadvideoflag = true
      this.videourlflag = false
    },
    videourlfunc: function () {
      this.uploadvideoflag = false
      this.videourlflag = true
    }
  },
  mounted () {
    if (!Vue.localStorage.get('user')) {
      this.$router.push('/')
    }
    let _this = this
    axios.all([
      axios.get(process.env.LiveAPI + 'category/50?search='),
      axios.get(process.env.LiveAPI + 'tags/50?search=')
    ]).then(axios.spread(function (res1, res2) {
      _this.categoryList = res1.data
      _this.tagList = res2.data
    })).catch(e => {
      console.log(e)
    })

    this.image = JSON.parse(Vue.localStorage.get('user')).profileImagePreference
    this.username = JSON.parse(Vue.localStorage.get('user')).username
  }
}
