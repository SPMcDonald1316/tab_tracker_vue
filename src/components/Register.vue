<template>
  <v-layout column justify-center>
    <v-flex>
      <v-card class="white elevation-2">
        <v-toolbar dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
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
            <v-btn class="cyan" dark @click="register">Register</v-btn>
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
    register () {
      const params = {
        email: this.email,
        password: this.password
      }
      axios.post('/api/users', params)
        .then(response => {
          this.$router.push('/login')
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
