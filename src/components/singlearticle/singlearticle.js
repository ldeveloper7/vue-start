import headermenu from '../headermenu/headermenu.vue'
import axios from 'axios'
export default {
  components: {
    headermenu
  },
  data: () => ({
    singlearticle: []
  }),
  mounted () {
    axios.get('https://api.blavity.com/v1/' + this.$route.params.slug)
      .then((res) => {
        this.singlearticle = res.data
      })
      .catch(e => {
        console.log('Error: ')
      })
  }
}
