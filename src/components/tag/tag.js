'use strict'
import Vue from 'vue'
import axios from '../../../node_modules/axios/index'
import headermenu from '../headermenu/headermenu.vue'
import vueHeadful from 'vue-headful';
Vue.component('vue-headful', vueHeadful);
export default {
  components: {
    headermenu
  },
  data () {
    return {
      info: {},
      totalcount: 0,
      loadCount: 6,
      loadMoreButton: 1,
      cloudinaryImageUrl: process.env.cloudinaryImageUrl
    }
  },
  mounted () {
    this.loadmore()
  },
  watch: {
    $route () {
      this.totalcount = 0
      this.loadmore()
    }
  },
  methods: {
    loadmore: function () {
      axios
        .get(process.env.LiveAPI + 'articles/tags/' + this.$route.params.tag + '/' + this.loadCount + '/' + (this.totalcount))
        .then(response => {
          if (response.data.length) {
            if (!this.totalcount) {
              this.info = (response.data)
            } else {
              this.info.push(...response.data)
            }
            this.totalcount = this.totalcount + response.data.length
            if (response.data.length < this.loadCount) {
              this.loadMoreButton = 0
            }
          } else {
            this.loadMoreButton = 0
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
