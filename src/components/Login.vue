<template>
  <v-layout column justify-center>
    <v-flex>
      <panel title="Login">
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
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
