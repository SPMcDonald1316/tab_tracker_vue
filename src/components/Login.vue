<template>
  <v-layout column justify-center>
    <v-flex>
      <v-card class="white elevation-2">
        <v-toolbar dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <form>
            <v-text-field
              label="Email"
              type="email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
            ></v-text-field>
            <br>
            <div :key=error v-for="error in errors">{{error}}</div>
            <v-btn class="cyan" dark @click="login">Login</v-btn>
          </form>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: '',
      errors: []
    }
  },
  methods: {
    login () {
      const params = {
        email: this.email,
        password: this.password
      }
      axios.post('/api/sessions', params)
        .then(response => {
          this.$store.dispatch('setToken', response.data.jwt)
          this.$store.dispatch('setUser', response.data.email)
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error)
          this.errors = ['Invalid email or password.']
          this.email = ''
          this.password = ''
        })
    }
  }
}
</script>

<style scoped>

</style>
