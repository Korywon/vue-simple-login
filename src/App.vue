<template>
<div class="container">
  <router-view :user="user" @signout="signout" />
</div>
</template>

<script>
import router from '@/router'
import { auth } from '@/firebase'

export default {
  name: 'App',
  data () {
    return {
      user: null
    }
  },
  methods: {
    signout () {
      this.user = null
      router.push('/')
    }
  },
  mounted () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      }
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Fira Code', monospace;
  --fg-primary: black;
  --fg-secondary: gray;
}

button {
  color: white;
  background-color: cornflowerblue;
  border: none;
  padding: 16px 32px;
  margin: 0 1rem 0 0;
  outline: none;
}

button:hover {
  cursor: pointer;
}

button:active {
  background-color: black;
}

.container {
  margin: 2rem;
  padding: 2rem;
  border-style: solid;
}

.fg-primary {
  color: var(--fg-primary);
}

.fg-secondary {
  color: var(--fg-secondary);
}
</style>
