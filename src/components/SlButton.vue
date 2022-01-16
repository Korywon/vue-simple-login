<template>
<button :style="{background: color}" type="{{type}}">{{text}}</button>
</template>

<script>
export default {
  name: 'SlButton',
  props: {
    color: String,
    text: String,
    type: String
  }
}
</script>
