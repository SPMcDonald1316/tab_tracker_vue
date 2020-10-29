<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <form>
          <v-text-field
            label="Title"
            type="text"
            v-model="title"
          ></v-text-field>
          <v-text-field
            label="Artist"
            type="text"
            v-model="artist"
          ></v-text-field>
          <v-text-field
            label="Genre"
            type="text"
            v-model="genre"
          ></v-text-field>
          <v-text-field
            label="Album"
            type="text"
            v-model="album"
          ></v-text-field>
          <v-text-field
            label="Album Image Url"
            type="text"
            v-model="albumImg"
          ></v-text-field>
          <v-text-field
            label="Youtube ID"
            type="text"
            v-model="youtubeId"
          ></v-text-field>
        </form>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Lyrics and Tab">
        <form>
          <v-textarea
            label="Lyrics"
            type="text"
            v-model="lyrics"
          ></v-textarea>
          <v-textarea
            label="Tab"
            type="text"
            v-model="tab"
          ></v-textarea>
        </form>
      </panel>
      <v-btn
        class="cyan"
        dark
        @click="addSong"
      >Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from './Panel'
import axios from 'axios'
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
      tab: '',
      errors: []
    }
  },
  components: {
    Panel
  },
  methods: {
    addSong () {
      const params = {
        title: this.title,
        artist: this.artist,
        genre: this.genre,
        album: this.album,
        album_image: this.albumImg,
        youtube_id: this.youtubeId,
        lyrics: this.lyrics,
        tab: this.tab
      }
      axios.post('/api/songs', params)
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
