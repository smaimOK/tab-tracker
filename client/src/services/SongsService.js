import Api from '@/services/Api'

export default {
  index (credentials) {
    return Api().get('songs', credentials)
  },
  post (song) {
    return Api().post('songs', song)
  }
}
