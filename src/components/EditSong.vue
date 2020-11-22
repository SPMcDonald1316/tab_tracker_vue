<template>
  <v-layout>
    <v-flex xs4 class="mx-4">
      <panel title="Song Metadata">
        <form>
          <v-text-field
            label="Title"
            type="text"
            v-model="song.title"
            required
            :rules=[required]
          ></v-text-field>
          <v-text-field
            label="Artist"
            type="text"
            v-model="song.artist"
            required
            :rules=[required]
          ></v-text-field>
          <v-text-field
            label="Genre"
            type="text"
            v-model="song.genre"
            required
            :rules=[required]
          ></v-text-field>
          <v-text-field
            label="Album"
            type="text"
            v-model="song.album"
            required
            :rules=[required]
          ></v-text-field>
          <v-text-field
            label="Album Image Url"
            type="text"
            v-model="song.album_image"
            required
            :rules=[required]
          ></v-text-field>
          <v-text-field
            label="Youtube ID"
            type="text"
            v-model="song.youtube_id"
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
            v-model="song.lyrics"
            required
            :rules=[required]
          ></v-textarea>
          <v-textarea
            label="Tab"
            type="text"
            v-model="song.tab"
            required
            :rules=[required]
          ></v-textarea>
        </form>
      </panel>
      <v-list :key="error" v-for="error in errors">
        <v-list-item class="error" dark dense justify-center>{{error}}</v-list-item>
      </v-list>
      <v-btn
        class="cyan my-4"
        dark
        @click="editSong"
      >Edit Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from './Panel'
import axios from 'axios'
export default {
  data () {
    return {
      song: {},
      errors: [],
      required: (value) => !!value || 'Required'
    }
  },
  created () {
    axios.get(`/api/songs/${this.$route.params.songId}`)
      .then(response => {
        this.song = response.data
      })
      .catch(error => {
        this.errors = error.response.data.errors
      })
  },
  components: {
    Panel
  },
  methods: {
    editSong () {
      const params = {
        title: this.song.title,
        artist: this.song.artist,
        genre: this.song.genre,
        album: this.song.album,
        album_image: this.song.album_image,
        youtube_id: this.song.youtube_id,
        lyrics: this.song.lyrics,
        tab: this.song.tab
      }
      axios.patch(`/api/songs/${this.$route.params.songId}`, params)
        .then(response => {
          this.$router.push(`/songs/${this.$route.params.songId}`)
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
