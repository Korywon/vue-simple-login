<template>
<div class="card-container">
  <router-view :user="user"></router-view>
</div>
<SlButton text="Signout" @click="signOut"/>
</template>

<script>
import SlButton from '@/components/SlButton'
import router from '@/router'
import { auth } from '@/firebase'

export default {
  name: 'SlDashboard',
  components: {
    SlButton
  },
  data () {
    return {
      title: 'Dashboard'
    }
  },
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  emits: ['signout'],
  methods: {
    signOut () {
      auth.signOut()
        .then(() => {
          this.$emit('signout')
          router.push('/')
        })
        .catch((error) => {
          console.error(`${error.code}: ${error.message}`)
          alert('Error: Unable to signout!')
        })
    }
  }
}
</script>
