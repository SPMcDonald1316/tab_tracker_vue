<template>
  <panel title="Lyrics">
    <textarea
      readonly
      v-model="lyrics"
    ></textarea>
  </panel>
</template>

<script>
import Panel from '../Panel'
export default {
  props: [
    'lyrics'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
  textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 20px;
  }
</style>
