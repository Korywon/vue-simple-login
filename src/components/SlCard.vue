<template>
<div class="card">
  <h3>{{title}}</h3>
  <p class="fg-secondary">{{subtitle}}</p>
</div>
</template>

<script>
export default {
  name: 'SlCard',
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style>
.card {
  padding: 1rem;
  border: solid 1px;
  transition: 0.2s ease;
}

.card:hover {
  color: white;
  cursor: pointer;
  background-color: #121212;
  transition: 0.2s ease;
}
</style>
