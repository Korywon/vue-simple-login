<template>
<SlHeader :title="title" :subtitle="subtitle" />
<SlFormSignup />
<SlFooter />
</template>

<script>
import SlHeader from '@/components/SlHeader'
import SlFormSignup from '@/components/SlFormSignup'
import SlFooter from '@/components/SlFooter'
import router from '@/router'
import { auth } from '@/firebase'

export default {
  name: 'SlSignup',
  components: {
    SlHeader,
    SlFormSignup,
    SlFooter
  },
  data () {
    return {
      title: 'Signup!',
      subtitle: 'Please enter your information to create an account.'
    }
  },
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  emits: ['signout'],
  mounted () {
    auth.onAuthStateChanged((userData) => {
      if (userData) {
        router.push({
          name: 'Dashboard',
          params: { user: userData }
        })
      }
    })
  }
}
</script>
