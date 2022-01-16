<template>
<SlHeader title="About us!" subtitle="This is what we're all about." />
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat
  interdum varius sit amet mattis vulputate. Mauris vitae ultricies leo integer
  malesuada nunc vel risus. Gravida rutrum quisque non tellus. Augue mauris
  augue neque gravida in fermentum. Eros in cursus turpis massa tincidunt dui
  ut ornare. Lacinia at quis risus sed vulputate. Hendrerit gravida rutrum
  quisque non tellus orci ac auctor. Sit amet porttitor eget dolor morbi non
  arcu. Turpis massa sed elementum tempus egestas sed sed risus. Consectetur
  purus ut faucibus pulvinar elementum integer enim neque volutpat.
</p>
<SlFooter />
</template>

<script>
import SlHeader from '@/components/SlHeader'
import SlFooter from '@/components/SlFooter'

export default {
  name: 'SlAbout',
  components: {
    SlHeader,
    SlFooter
  },
  props: {
    user: Object
  },
  emits: ['signout']
}
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
