'use strict'
import Vue from 'vue'
import headermenu from '../headermenu/headermenu.vue'
import VueLocalStorage from 'vue-localstorage'
import { validationMixin } from 'vuelidate'

Vue.use(VueLocalStorage)
export default {
  mixins: [validationMixin],
  data: () => ({
    show1: false,
    userData: [],
    dialog: false,
    dialog1: false,
    dialog2: false,
    profileData: [],
    displayname: '',
    email: '',
    username: '',
    website: '',
    facebookurl: '',
    twitterurl: '',
    instagramurl: '',
    googleurl: '',
    bio: '',
    currentpassword: '',
    newpassword: '',
    passwordagain: '',
    rules: {
      required: value => !!value || 'Required.',
      min: v => (v.length >= 8 && v.length <= 20) || 'Min 8 characters',
      passMatch: v => (v.text === this.newpassword || this.passwordagain === v.text) || 'Please Match the New Password and Password Again',
      emailMatch: () => ('The email and password you entered don\'t match')
    }
  }),
  components: {
    headermenu
  },
  mounted () {
    if (Vue.localStorage.get('user')) {
      this.userData = JSON.parse(Vue.localStorage.get('user'))
      let DisplayName = this.userData.display_name
      let Email = this.userData.email
      let Username = this.userData.username
      let Website = this.userData.links
      let FacebookUrl = this.userData.facebookProfileUrl
      let TwitterUrl = this.userData.twitterProfileUrl
      let InstagramUrl = this.userData.instagramProfileUrl
      let GoogleUrl = this.userData.googleProfileUrl
      let Bio = this.userData.bio

      this.displayname = DisplayName
      this.email = Email
      this.username = Username
      this.website = Website
      this.facebookurl = FacebookUrl
      this.twitterurl = TwitterUrl
      this.instagramurl = InstagramUrl
      this.googleurl = GoogleUrl
      this.bio = Bio

      // let array = [
      //   {title: 'Display Name', value: DisplayName, vmodel: this.displayname},
      //   {title: 'Email', value: Email, vmodel: this.email},
      //   {title: 'Username', value: Username, vmodel: this.username},
      //   {title: 'Website', value: Website, vmodel: this.website},
      //   {title: 'Facebook url', value: FacebookUrl, vmodel: this.facebookurl},
      //   {title: 'Twitter url', value: TwitterUrl, vmodel: this.twitterurl},
      //   {title: 'Instagram url', value: InstagramUrl, vmodel: this.instagramurl},
      //   {title: 'Google+ url', value: GoogleUrl, vmodel: this.googleurl},
      //   {title: 'Bio', value: Bio, vmodel: this.bio}
      // ]
      // this.profileData = array
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    clickme () {
      console.log(this.displayname + this.username)
    }
  }
}
