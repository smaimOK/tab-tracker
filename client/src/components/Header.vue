<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span @click="navigateTo({name: 'root'})" class="home">
        TabTracker
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        flat
        v-on:click="navigateTo({name: 'songs'})">
        browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        v-on:click="navigateTo({name: 'login'})">
        login
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        v-on:click="navigateTo({name: 'register'})">
          sign up
      </v-btn>

        <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        v-on:click="logout">
          log out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to home page
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E
}
</style>
