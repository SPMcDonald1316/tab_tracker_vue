<template>
  <panel title="Youtube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="500"
      :player-height="232"
    >
    </youtube>
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
