<template>
  <div>
    <h1>Register</h1>

    <input
      type="email"
      name="emali"
      v-model="email"
      placeholder="emal"/>
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password">
    <br>
    <button
      @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  mounted () {
    setInterval(() => {
      console.log(this.email, this.password)
    }, 2000)
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>
