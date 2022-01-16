<template>
<form @submit="onSubmit">
  <div class="form-control">
    <label for="email">E-mail</label>
    <input required type="text" name="email" v-model="email"
      placeholder="Enter e-mail here...">
  </div>
  <div class="form-control">
    <label for="password">Password</label>
    <input required type="password" name="password" v-model="password"
      placeholder="Enter password here...">
  </div>
  <SlButton text="Signin" type="submit" />
  <span v-show="showSpinner">
    <i class="fas fa-circle-notch fa-spin spinner"></i> Loading...
  </span>
</form>
</template>

<script>
import SlButton from '@/components/SlButton'
import router from '@/router'
import { firebase, auth } from '@/firebase'

export default {
  name: 'SlFormSignIn',
  components: {
    SlButton
  },
  data () {
    return {
      email: '',
      password: '',
      showSpinner: false
    }
  },
  methods: {
    onSubmit (e) {
      this.showSpinner = true

      e.preventDefault()

      if (!this.email) return
      if (!this.password) return

      auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

      auth.signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          router.push({
            name: 'Dashboard',
            params: { user: userCredential.user }
          })
        })
        .catch((error) => {
          this.showSpinner = false
          console.error(`${error.code}: ${error.message}`)
          alert('Error: Unable to signin!')
        })
    }
  }
}
</script>

<style scoped>
.form-control {
  padding: 0;
  margin: 1rem 0;
}

.form-control label{
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px 0;
}

.spinner {
  font-size: 16pt;
}
</style>
