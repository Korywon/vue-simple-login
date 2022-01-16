<template>
<h1>{{title}}</h1>
<p class="fg-secondary">{{subtitle}}</p>
</template>

<script>
export default {
  name: 'SlHeader',
  props: {
    title: String,
    subtitle: String
  }
}
</script>
