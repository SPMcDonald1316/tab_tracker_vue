<template>
  <v-layout column justify-center>
    <v-flex :key="song.id" v-for="song in songs">
      <song-panel :song="song"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongPanel from './SongPanel'
import axios from 'axios'
export default {
  components: {
    SongPanel
  },
  data () {
    return {
      songs: []
    }
  },
  created () {
    axios.get('/api/songs')
      .then(response => {
        this.songs = response.data
      })
  }
}
</script>

<style scoped>
</style>
