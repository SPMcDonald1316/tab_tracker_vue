<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <form>
          <v-text-field
            label="Title"
            type="text"
            v-model="title"
            required
            :rules=[required]
          ></v-text-field>
          <v-text-field
            label="Artist"
            type="text"
            v-model="artist"
            required
            :rules=[required]
          ></v-text-field>
          <v-text-field
            label="Genre"
            type="text"
            v-model="genre"
            required
            :rules=[required]
          ></v-text-field>
          <v-text-field
            label="Album"
            type="text"
            v-model="album"
            required
            :rules=[required]
          ></v-text-field>
          <v-text-field
            label="Album Image Url"
            type="text"
            v-model="albumImg"
            required
            :rules=[required]
          ></v-text-field>
          <v-text-field
            label="Youtube ID"
            type="text"
            v-model="youtubeId"
            required
            :rules=[required]
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
            required
            :rules=[required]
          ></v-textarea>
          <v-textarea
            label="Tab"
            type="text"
            v-model="tab"
            required
            :rules=[required]
          ></v-textarea>
        </form>
      </panel>
      <div :key="error" v-for="error in errors">{{error}}</div>
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
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImg: null,
      youtubeId: null,
      lyrics: null,
      tab: null,
      errors: [],
      required: (value) => !!value || 'Required'
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
        .then(response => {
          this.$router.push('/songs')
        })
        .catch(error => {
          this.errors = error.response.data.errors
        })
    }
  }
}
</script>

<style scoped>

</style>
