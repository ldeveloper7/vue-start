'use strict'
import Vue from 'vue';
import headermenu from '../headermenu/headermenu.vue'
import trendingpost from '../trending-post/trending-post.vue'
import dailynewsletter from '../daily-newsletter/daily-newsletter.vue'
import axios from 'axios'
import vueHeadful from 'vue-headful';
Vue.component('vue-headful', vueHeadful);
export default {
  components: {
    headermenu,
    trendingpost,
    dailynewsletter
  },
  data: () => ({
    singlearticle: [],
    cloudinaryImageUrl: process.env.cloudinaryImageUrl
  }),
  watch: {
    $route () {
      this.loadarticle()
    }
  },
  mounted () {
    this.loadarticle()
  },
  methods: {
    loadarticle: function () {
      axios.get(process.env.LiveAPI + this.$route.params.slug)
        .then((res) => {
          if (res.data) {
            this.singlearticle = res.data
            this.singlearticle.body = this.replaceLegacyBlavityImage(this.singlearticle.body)
            this.singlearticle.body = this.removeSortCode(this.singlearticle.body)
          } else {
            this.$router.push('/404')
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    replaceLegacyBlavityImage: function (content) {
      content = content && content || ''
      var sortcode = content.match(/src="http:\/\/blavity.com\/wp-content\/uploads/g);
      var mainresponce = content
      if (sortcode !== null) {
        sortcode.forEach(function (element) {
          var el = element
          element = element.replace(/src="http:\/\/blavity.com\/wp-content\/uploads/g, 'src="http://legacy.blavity.com/wp-content/uploads')
          mainresponce = mainresponce.replace(el, element);
        })
      }
      return mainresponce;
    },
    removeSortCode: function (content) {
      content = content && content || '';
      var sortcode = content.match(/((\[)+[\w|\s|\d|\=|\;|\&|\"]+(\]))+[\w|\s|\d|\=|\;|\&|\:|\.|\-|\"|\'|\/|\<|\>|\"|\0|\?|\*|\_|\+|\,|\é]+((\[\/+([a-z,A-Z,0-9])+\]))+/g);
      var mainresponce = content;
      if (sortcode !== null) {
        sortcode.forEach(function (element) {
          var el = element;
          element = element.replace(/((\[)+[\w|\s|\d|\=|\;|\&|\"]+(\]))+/g, '');
          element = element.replace(/((\[\/+([a-z,A-Z,0-9])+\]))/g, '');
          mainresponce = mainresponce.replace(el, element);
        });
      }
      return mainresponce;
    }
  }
}
