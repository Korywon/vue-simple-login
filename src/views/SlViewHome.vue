<template>
<SlHeader :title="title" :subtitle="subtitle" />
<SlFormSignin />
<SlFooter />
</template>

<script>
import SlHeader from '@/components/SlHeader'
import SlFormSignin from '@/components/SlFormSignin'
import SlFooter from '@/components/SlFooter'
import router from '@/router'
import { auth } from '@/firebase'

export default {
  name: 'SlHome',
  components: {
    SlHeader,
    SlFormSignin,
    SlFooter
  },
  data () {
    return {
      title: 'Welcome!',
      subtitle: 'Please enter your account information to login.'
    }
  },
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  mounted () {
    auth.onAuthStateChanged((userData) => {
      if (userData) {
        router.push({
          name: 'Dashboard',
          params: { user: userData }
        })
      }
    })
  },
  emits: ['signout']
}
</script>
