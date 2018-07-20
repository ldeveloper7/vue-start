import axios from '../../../node_modules/axios/index'
import headermenu from '../headermenu/headermenu.vue'
export default {
  components: {
    headermenu
  },
  data () {
    return {
      info: {},
      totalcount: 0
    }
  },
  mounted () {
    axios
      .get('https://api.blavity.com/v1/articles/categories/' + this.$route.params.category + '/6/' + (this.totalcount))
      .then(response => {
        this.info = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    loadmore: function (count) {
      axios
        .get('https://api.blavity.com/v1/articles/categories/' + this.$route.params.category + '/6/' + (this.totalcount + count))
        .then(response => {
          this.info.push(...response.data)
          this.totalcount = this.totalcount + response.data.length
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}