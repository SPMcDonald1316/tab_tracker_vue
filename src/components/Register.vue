<template>
  <v-layout column justify-center>
    <v-flex>
      <panel title="Register">
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
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
