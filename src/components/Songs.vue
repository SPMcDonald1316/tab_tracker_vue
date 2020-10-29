<template>
  <v-layout column justify-center>
    <v-flex>
      <panel title="Songs">
        <v-btn
          slot="action"
          class="cyan accent-2"
          light
          small
          absolute
          right
          middle
          to='/songs/add'
        >
          <v-icon>add</v-icon>
        </v-btn>
        <div :key="song.id" v-for="song in songs">
          {{song.title}} - {{song.artist}}
          <v-spacer></v-spacer>
          <v-btn class="cyan mx-1" dark>Edit</v-btn>
          <v-btn class="cyan mx-1" dark>Delete</v-btn>
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
        this.songs = response.data
      })
  }
}
</script>

<style scoped>

</style>
