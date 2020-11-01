<template>
  <div>
    <p>{{song.title}}</p>
    <p>{{song.artist}}</p>
    <p>{{song.genre}}</p>
  </div>
</template>

<script>
import axios from 'axios'
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
  }
}
</script>

<style scoped>

</style>
