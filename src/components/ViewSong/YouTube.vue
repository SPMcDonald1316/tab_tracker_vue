<template>
  <panel title="Youtube Video">
    {{youtubeId}}
  </panel>
</template>

<script>
import Panel from '../Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
