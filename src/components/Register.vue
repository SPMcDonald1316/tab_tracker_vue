<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input
          type="email"
          name="email"
          v-model="email"
          placeholder="email"
          >
          <br>
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password"
          >
          <br>
          <div :key=error v-for="error in errors">{{error}}</div>
          <v-btn class="cyan" @click="register">Register</v-btn>
        </div>
      </div>
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
    register () {
      const params = {
        email: this.email,
        password: this.password
      }
      axios.post('/api/users', params)
        .then(response => {
          this.$router.push('/')
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
