<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form
            name="tab-tracker-form"
            autocomplete="off">
          <v-text-field
            type="email"
            label="email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            type="password"
            label="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="register">Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: 'abc',
      password: '123',
      error: null
    }
  },
  mounted () {
    setInterval(() => {
      console.log(this.email, this.password)
    }, 2000)
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error{
  color: red;
}
</style>
