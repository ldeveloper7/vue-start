import headermenu from '../headermenu/headermenu.vue'
import { validationMixin } from '../../../node_modules/vuelidate'
import { required, maxLength, email } from '../../../node_modules/vuelidate/lib/validators'

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
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      }
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.email = ''
      this.password = ''
    }
  }
}
