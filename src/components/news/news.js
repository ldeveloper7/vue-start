import axios from '../../../node_modules/axios/index'
import headermenu from '../headermenu/headermenu.vue'
export default {
  components: {
    headermenu
  },
  data () {
    return {
      info: {}
    }
  },
  mounted () {
    axios
      .get('https://api.blavity.com/v1/articles/categories/news/6/0')
      .then(response => {
        this.info = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
