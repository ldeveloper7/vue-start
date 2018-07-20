import headermenu from '../headermenu/headermenu.vue'
import axios from 'axios'

export default {
  components: {
    headermenu
  },
  data: () => ({
    url: 'https://api.blavity.com/v1/articles/tags/cardi-b/4/0',
    fetchLatestNews: [],
    cardMenu1: [
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Kangaroo Valley Safari1',
        content: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
      },
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Kangaroo Valley Safari2',
        content: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
      },
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Kangaroo Valley Safari3',
        content: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
      }
    ],
    cardMenu2: [
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Dr. Mareena Robinson Snowden On Being The First Black Woman To Earn Her PhD In Nuclear Science From MIT1',
        content: 'News } Christine'
      },
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Dr. Mareena Robinson Snowden On Being The First Black Woman To Earn Her PhD In Nuclear Science From MIT2',
        content: 'News } Christine'
      },
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Dr. Mareena Robinson Snowden On Being The First Black Woman To Earn Her PhD In Nuclear Science From MIT3',
        content: 'News } Christine'
      },
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Dr. Mareena Robinson Snowden On Being The First Black Woman To Earn Her PhD In Nuclear Science From MIT4',
        content: 'News } Christine'
      }
    ],
    placeimage: [
      {src: 'http://via.placeholder.com/850x440', title: '1'},
      {src: 'http://via.placeholder.com/850x440', title: '2'}
    ]
  }),

  mounted () {
    axios.get(this.url)
      .then((res) => {
        this.fetchLatestNews = res.data
      })
      .catch(e => {
        console.log(e)
      })
  }
}
