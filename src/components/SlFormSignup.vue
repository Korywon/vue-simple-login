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
  <SlButton text="Signup" type="submit" />
</form>
</template>

<script>
import SlButton from '@/components/SlButton'
import router from '@/router'
import { auth } from '@/firebase'

export default {
  name: 'SlFormSignup',
  components: {
    SlButton
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    //
    // Submits the form data to Firebase to create a user.
    //
    onSubmit (e) {
      e.preventDefault()

      if (!this.email) return
      if (!this.password) return

      //
      // Attempt to create an account with email and password.
      //
      auth.createUserWithEmailAndPassword(this.email, this.password)
        //
        // If we sucessfully created an account, send a verification email,
        // alert the user, and clear the input fields.
        //
        .then((userCredential) => {
          // const user = userCredential.user

          // user.sendEmailVerification()
          alert(`Account created with ${this.email}!`)

          router.push('/')
          this.clearInputs()
        })
        //
        // Alert user with error code and message.
        //
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message

          console.error(errorCode)
          alert(`Error ${errorCode}: ${errorMessage}`)
        })
    },
    //
    // Clears the data that shows up on the input fields.
    //
    clearInputs () {
      this.email = ''
      this.password = ''
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
</style>
