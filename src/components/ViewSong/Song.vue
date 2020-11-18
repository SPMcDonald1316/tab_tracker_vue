<template>
  <v-layout>
    <v-flex xs6 class="mx-2">
      <song-metadata :song="song" />
    </v-flex>

    <v-flex xs6>
      <panel title="Tabs">
        <textarea
          readonly
          v-model="song.tab"
        ></textarea>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import Panel from '../Panel'
import SongMetadata from './SongMetadata'
export default {
  data () {
    return {
      song: null,
      errors: []
    }
  },
  created () {
    const songId = this.$store.state.route.params.songId
    axios.get(`/api/songs/${songId}`)
      .then(response => {
        console.log(response)
        this.song = response.data
      })
  },
  components: {
    Panel,
    SongMetadata
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
