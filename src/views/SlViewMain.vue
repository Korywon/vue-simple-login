<template>
<SlHeader v-if="user" :title="title" :subtitle="user.email" />
<div class="card-container">
  <router-link to="/dashboard/profile">
    <SlCard title="Profile" subtitle="Stuff about you." />
  </router-link>
  <router-link to="/dashboard/logs">
    <SlCard title="Logs" subtitle="View log entries." />
  </router-link>
  <router-link to="/dashboard/settings">
    <SlCard title="Settings" subtitle="Configure stuff." />
  </router-link>
</div>
</template>

<script>
import SlHeader from '@/components/SlHeader'
import SlCard from '@/components/SlCard'

export default {
  name: 'SlDashboard',
  components: {
    SlHeader,
    SlCard
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
  }
}
</script>

<style scoped>
.card-container {
  display: grid;
  margin: 1rem 0;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  text-decoration: none;
}

a {
  text-decoration: none;
  color: black;
}
</style>
