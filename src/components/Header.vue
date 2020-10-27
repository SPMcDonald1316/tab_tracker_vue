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

        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          text
          to='/login'
        >Login</v-btn>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          text
          to='/register'
        >Sign Up</v-btn>

        <v-btn
          v-if="$store.state.isUserLoggedIn"
          text
          @click="logout"
        >Logout</v-btn>

      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
