<template>
  <panel title="Song Metadata">
    <form>
      <v-text-field
        label="title"
        type="text"
        v-model="title"
      ></v-text-field>
      <v-text-field
        label="artist"
        type="text"
        v-model="artist"
      ></v-text-field>
      <v-text-field
        label="genre"
        type="text"
        v-model="genre"
      ></v-text-field>
      <v-text-field
        label="album"
        type="text"
        v-model="album"
      ></v-text-field>
      <v-text-field
        label="albumImg"
        type="text"
        v-model="albumImg"
      ></v-text-field>
      <v-text-field
        label="youtubeId"
        type="text"
        v-model="youtubeId"
      ></v-text-field>
      <v-text-field
        label="lyrics"
        type="textarea"
        v-model="lyrics"
      ></v-text-field>
      <v-text-field
        label="tab"
        type="textarea"
        v-model="tab"
      ></v-text-field>
      <v-btn class="cyan" dark>Add Song</v-btn>
    </form>
  </panel>
</template>

<script>
import Panel from './Panel'
export default {
  data () {
    return {
      title: '',
      artist: '',
      genre: '',
      album: '',
      albumImg: '',
      youtubeId: '',
      lyrics: '',
      tab: ''
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
