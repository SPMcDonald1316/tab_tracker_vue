<template>
  <v-layout column justify-center>
    <v-flex>
      <v-card
        elevation="2"
        outlined
        class="mx-auto"
        width="700px"
      >
        <v-toolbar dense class="cyan" dark>
          <v-toolbar-title col>Login</v-toolbar-title>
        </v-toolbar>
        <form class="pl-4 pr-4 pt-2 pb-2">
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
          axios.defaults.headers.common.Authorization =
            `Bearer ${response.data.jwt}`
          localStorage.setItem('jwt', response.data.jwt)
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
