'use strict'
import headermenu from '../headermenu/headermenu.vue'
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
import ckeditor from 'vue-ckeditor2'
import axios from 'axios'
import vueHeadful from 'vue-headful'
Vue.component('vue-headful', vueHeadful)

Vue.use(VueLocalStorage)
export default {
  data: () => ({
    opinion: true,
    description: '',
    categoryvalue: [],
    tagvalue: [],
    series: [],
    video: false,
    videourlvalue: '',
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
    pagetitletext: 'Edit Article | ',
    imageurl: '',
    image: '',
    txttitle: '',
    txtsubtitle: '',
    txturl: '',
    picturedescription: '',
    captioncredits: '',
    token: '',
    commentStatus: false,
    published: false,
    post_to_social: false,
    post_status: '',
    isScheduled: false,
    listicle: [],
    urlflag: true,
    urlbuttonflag: 'Edit',
    videoFile: '',
    videoUrl: '',
    videoshowflag: false,
    startbtnflag: true,
    convertedImageName: '',
    singlearticle: [],
    items: [
      'draft',
      'submited',
      'rejected',
      'publish'
    ]
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
    cancel () {
      this.btnflag = false
      this.image = ''
      this.imageurl = ''
    },
    toggle () {
      this.urlflag = !this.urlflag;
      (this.urlflag === false) ? this.urlbuttonflag = 'Done' : this.urlbuttonflag = 'Edit'
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
    categorychangedValue: function () {
      let _this = this
      axios.get(process.env.LocalAPI + 'category/50?search=' + document.getElementById('categoryId').value).then((res) => {
        _this.categoryList = res.data
      }).catch(e => {
        console.log(e)
      })
    },
    tagchangedValue: function () {
      let _this = this
      axios.get(process.env.LocalAPI + 'tags/50?search=' + document.getElementById('tagId').value).then((res) => {
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
      this.btnflag = true
      var fd = new FormData()
      fd.append('image', this.image)

      axios.post('http://192.168.200.18/blavity/insert.php', fd)
        .then(res => {
          if (res.data.filename) {
            this.convertedImageName = res.data.filename
            console.log(this.convertedImageName)
          } else {
            alert('Please select an proper Image')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    onFileSelected (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.videoUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.videoFile = files[0]
      this.videoshowflag = true
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
        type: this.title,
        postType: this.title,
        videourl: (this.videourlvalue) ? this.videourlvalue : this.videoFile.name,
        tags: this.tagvalue,
        categories: this.categoryvalue,
        series: this.series,
        slug: this.txturl,
        title: this.txttitle,
        subTitle: this.txtsubtitle,
        commentStatus: this.commentStatus,
        published: this.published,
        post_to_social: this.post_to_social,
        post_status: this.post_status,
        isScheduled: this.isScheduled,
        wp_featuredImage: this.convertedImageName,
        listicle: this.listicle,
        body: this.bodycontent,
        excerpt: this.description,
        featureImagesAlt: this.picturedescription,
        featureImagesCaption: this.captioncredits,
        publish_on: new Date(),
        isComplete: false
      }

      axios.post(process.env.LocalAPI + 'articles', { article: addArticle },
        {
          headers: {
            token: this.token
          }
        })
        .then(res => {
          if (typeof res.data === 'object') {
            this.$router.push('/' + JSON.parse(Vue.localStorage.get('user')).username + '/myposts')
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    keyupfunc: function () {
      this.txturl = this.txttitle.replace(/[^a-zA-Z0-9 ]/g, '').replace(/[ ]+/g, '-')
    },
    loadarticle: function () {
      let _this = this
      axios.get(process.env.LiveAPI + this.$route.params.editpost)
        .then((res) => {
          if (res.data) {
            _this.singlearticle = res.data
            _this.txttitle = this.singlearticle.title
            _this.pagetitletext = _this.pagetitletext + this.singlearticle.title
            _this.txtsubtitle = this.singlearticle.subTitle
            _this.keyupfunc()
            _this.bodycontent = this.singlearticle.body
            _this.description = this.singlearticle.excerpt
            _this.singlearticle.categories.forEach((item) => {
               _this.categoryvalue.push(item.name)
            })
            _this.singlearticle.tags.forEach((item) => {
              _this.tagvalue.push(item.name)
            })
            _this.imageurl = _this.baseImageUrl + _this.singlearticle.wp_featuredImage
            _this.post_status = _this.singlearticle.post_status
            _this.picturedescription = _this.singlearticle.featureImagesAlt
            _this.captioncredits = _this.singlearticle.featureImagesCaption
            _this.videourlvalue = _this.singlearticle.videourl
            _this.btnflag = true
          } else {
            this.$router.push('/404')
          }
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
    this.loadarticle()
    let _this = this
    _this.token = (Vue.localStorage.get('token'))
    axios.all([
      axios.get(process.env.LocalAPI + 'category/50?search='),
      axios.get(process.env.LocalAPI + 'tags/50?search=')
    ]).then(axios.spread(function (res1, res2) {
      _this.categoryList = res1.data
      _this.tagList = res2.data
    })).catch(e => {
      console.log(e)
    })

    var storageUser = JSON.parse(Vue.localStorage.get('user'))
    this.imageProfile = (storageUser.profileImagePreference === 'gravatar') ? storageUser.gravatar : (storageUser.profileImagePreference.search('cloudinary') > 0 ? storageUser.profileImagePreference : this.baseImageUrl + storageUser.profileImagePreference)
    this.username = storageUser.username
  }
}
