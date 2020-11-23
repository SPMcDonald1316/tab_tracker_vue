<template>
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
    ><v-icon>add</v-icon></v-btn>

    <div class="song">
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

          <v-btn
            class="cyan"
            dark
            :to="{name: 'song', params: {songId: song.id}}"
          >View</v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.album_image" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import Panel from '../Panel'
export default {
  props: [
    'song'
  ],
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
</style>
