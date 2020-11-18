<template>
  <v-layout>
    <v-flex xs6 class="mx-2">
      <panel title="Song">
        <v-layout>
          <v-flex xs6>
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
            <div class="song-genre">
              {{song.genre}}
            </div>

          </v-flex>
          <v-flex xs6>
            <img class="album-image" :src="song.album_image" />
            <br>
            {{song.album}}
          </v-flex>
        </v-layout>
      </panel>
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
import Panel from './Panel'
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
    Panel
  }
}
</script>

<style scoped>
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .song-title {
    font-size: 30px;
  }
  .song-artist {
    font-size: 24px;
  }
  .song-genre {
    font-size: 18px;
  }
  .album-image {
    width: 200px;
    height: auto;
    margin: 0 auto;
  }
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
