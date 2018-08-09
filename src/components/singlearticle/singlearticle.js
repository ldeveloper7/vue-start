'use strict'
import headermenu from '../headermenu/headermenu.vue'
import trendingpost from '../trending-post/trending-post.vue'
import dailynewsletter from '../daily-newsletter/daily-newsletter.vue'
import axios from 'axios'
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
          } else {
            this.$router.push('/404')
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
