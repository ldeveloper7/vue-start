'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import headermenu from '../headermenu/headermenu.vue'
import { validationMixin } from 'vuelidate'
import axios from 'axios'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.use(Router)
export default {
  mixins: [validationMixin],
  validations: {
    name: '',
    email: ''
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },
  components: {
    headermenu
  },
  data () {
    return {
      show1: false,
      show2: false,
      email: '',
      username: '',
      password: '',
      repassword: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      }
    }
  },
  mounted () {
    if (Vue.localStorage.get('user')) {
      location.href = '/'
    }
  },
  methods: {
    submit () {
      axios
        .post('http://localhost:3100/v1/auth/signup', {
          'user': {
            'email': this.email,
            'username': this.username,
            'password': this.password,
            'passwordAgain': this.repassword,
            'wants_newsletter': false
          }, 'host': 'https://21ninety.com:443'
        })
        .then(response => {
          if (response.data) {
            if (response.data.success === true) {
              Vue.localStorage.set('token', response.data.token)
              Vue.localStorage.set('user', JSON.stringify(response.data.user))
              this.$router.push('/')
            } else {
              this.email = ''
              this.username = ''
              this.password = ''
              this.repassword = ''
            }
          }
        })
        .catch(e => {
          this.email = ''
          this.username = ''
          this.password = ''
          this.repassword = ''
          console.log(e)
        })
    },
    clear () {
      this.$v.$reset()
      this.email = ''
      this.username = ''
      this.password = ''
      this.repassword = ''
    }
  }
}
