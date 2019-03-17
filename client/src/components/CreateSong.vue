<template>
  <v-layout>
    
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          v-model="song.title"
          required
          :rules="[v => !!v || this.validText.required]">
        </v-text-field>

        <v-text-field
          label="Artist"
          v-model="song.artist"
          required
          :rules="[v => !!v || this.validText.required]">
        </v-text-field>

        <v-text-field
          label="Genre"
          v-model="song.genre"
          required
          :rules="[v => !!v || this.validText.required]">
        </v-text-field>

        <v-text-field
          label="Album"
          v-model="song.album"
          required
          :rules="[v => !!v || this.validText.required]">
        </v-text-field>

        <v-text-field
          label="Album Image Url"
          v-model="song.albumImageUrl"
          required
          :rules="[v => !!v || this.validText.required]">
        </v-text-field>

        <v-text-field
          label="YouTube Id"
          v-model="song.youtubeId"
          required
          :rules="[v => !!v || this.validText.required]">
        </v-text-field>

      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-textarea
          label="Lyrics"
          v-model="song.lyrics"
          required
          :rules="[v => !!v || this.validText.required]">
        </v-textarea>

        <v-textarea
          label="Tab"
          v-model="song.tab"
          required
          :rules="[v => !!v || this.validText.required]">
        </v-textarea>
      </panel>
      <div v-if="error" class="danger-alert">
        {{error}}
      </div>
      <v-btn
        dark
        class="cyan"
        v-on:click="create">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      validText: {
        required: 'Item is required'
      },
      error: null,
      song: {
        title: 'ttitle',
        artist: 'artist',
        genre: 'genre',
        album: 'album',
        albumImageUrl: null,
        youtubeId: null,
        lyrics: 'lyrics',
        tab: 'tab'
      }
    }
  },
  methods: {
    async create () {
      this.error = null
      
      const areAllFieldsValid = Object.keys(this.song).every(key => !!this.song[key])
      if(!areAllFieldsValid){
        this.error = "Please fill all the required fields"
        return false
      }

      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
