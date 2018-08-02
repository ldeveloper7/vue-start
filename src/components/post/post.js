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
    categoryvalue: [],
    tagvalue: [],
    video: false,
    news: false,
    uploadvideoflag: false,
    videourlflag: false,
    imageProfile: '',
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
    titletext: 'Article',
    imageurl: '',
    image: '',
    txttitle: '',
    txtsubtitle: '',
    txturl: '',
    picturedescription: '',
    captioncredits: '',
    token: ''
  }),
  watch: {
    categoryvalue (val) {
      if (val.length > 2) {
        this.$nextTick(() => this.categoryvalue.pop())
      }
    }
  },
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
    previewFile (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageurl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    uploadvideofunc: function () {
      this.uploadvideoflag = true
      this.videourlflag = false
    },
    videourlfunc: function () {
      this.uploadvideoflag = false
      this.videourlflag = true
    },
    onPickFile: function () {
      this.$refs.fileInput.click()
    },
    saveArticle: function () {
      const addArticle = {
        txttitle: this.txttitle,
        txtsubtitle: this.txtsubtitle,
        txturl: this.txturl,
        bodycontent: this.bodycontent,
        description: this.description,
        categoryvalue: this.categoryvalue,
        tagvalue: this.tagvalue,
        image: this.image,
        picturedescription: this.picturedescription,
        captioncredits: this.captioncredits
      }
      console.log(addArticle)
      axios.post(process.env.LocalAPI + 'articles', { article: addArticle },
        {
          headers: {
            token: this.token
          }
        })
        .then(res => {
          console.log(res)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    if (!Vue.localStorage.get('user')) {
      this.$router.push('/')
    }
    let _this = this
    _this.token = (Vue.localStorage.get('token'))
    axios.all([
      axios.get(process.env.LiveAPI + 'category/50?search='),
      axios.get(process.env.LiveAPI + 'tags/50?search=')
    ]).then(axios.spread(function (res1, res2) {
      _this.categoryList = res1.data
      _this.tagList = res2.data
    })).catch(e => {
      console.log(e)
    })

    this.imageProfile = JSON.parse(Vue.localStorage.get('user')).profileImagePreference
    this.username = JSON.parse(Vue.localStorage.get('user')).username
  }
}
