<template>
  <v-card>
    <v-toolbar fixed class="cyan" dark>
      <v-btn to="/" text>
        <v-toolbar-title>
          Tab Tracker
        </v-toolbar-title>
      </v-btn>

      <v-toolbar-items>
        <v-btn text>Browse</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to='/login'>Login</v-btn>
        <v-btn text to='/register'>Sign Up</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
