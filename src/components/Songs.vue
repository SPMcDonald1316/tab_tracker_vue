<template>
  <v-layout column justify-center>
    <v-flex>
      <panel title="Songs">
        <div :key="song.id" v-for="song in songs">
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import axios from 'axios'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: []
    }
  },
  mounted () {
    axios.get('/api/songs')
      .then(response => {
        this.songs = response.data.songs
      })
  }
}
</script>

<style scoped>

</style>
