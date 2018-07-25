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
    } else {
      this.$router.push('/')
    }
  }
}
