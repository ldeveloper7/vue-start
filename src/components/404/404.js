'use strict'
import Vue from 'vue'
import headermenu from '../headermenu/headermenu.vue'
import trendingpost from '../trending-post/trending-post.vue'
import dailynewsletter from '../daily-newsletter/daily-newsletter.vue'
import vueHeadful from 'vue-headful';
Vue.component('vue-headful', vueHeadful);
import footermenu from '../Footer/Footer.vue'

export default {
  components: {
    headermenu,
    trendingpost,
    dailynewsletter,
    footermenu
  },
  data: () => ({}),
  watch: {},
  mounted () {},
  methods: {}
}
