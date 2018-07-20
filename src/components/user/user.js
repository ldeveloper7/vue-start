import headermenu from '../headermenu/headermenu.vue'
import axios from 'axios'
export default {
  components: {
    headermenu
  },
  data: () => ({
    tempData: [],
    singleData: []
  }),
  mounted () {
    let _this = this
    axios.get('https://api.blavity.com/v1/articles/tags/cardi-b/4/0')
      .then((res) => {
        _this.tempData = res.data
        _this.singleData = _this.tempData.find((o) => o._id === _this.$route.params.id)
      })
      .catch(e => {
        console.log('Error: ')
      })
  }
}
