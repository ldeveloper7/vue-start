'use strict'
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
