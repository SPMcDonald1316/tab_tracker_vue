<template>
  <div>
    <v-layout>
      <v-flex xs6 class="ma-2">
        <song-metadata :song="song" />
      </v-flex>

      <v-flex xs6 class="ma-2">
        <you-tube :youtubeId="song.youtube_id" />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6 class="ma-2">
        <tab :tab="song.tab" />
      </v-flex>

      <v-flex xs6 class="ma-2">
        <lyrics :lyrics="song.lyrics" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

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
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>

</style>
