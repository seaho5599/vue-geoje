import {
  createStore
} from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    menuData: [],
    visualData: [],
    bannerData: [],
    galleryData: [],
    infoData: [],
    newsData: [],
    movieData: {}
  },
  actions: {
    fetchMenuData( {commit} ) {
      axios.get('./data/menu.json')
        .then(response => {
          commit('MENU_INIT', response.data)
        })
        .catch(err => console.log(err))
    },
    fetchVisualData({commit}){
      axios.get('./data/visual.json')
      .then(res => {
        commit('VISUAL_INIT', res.data)
      })
      .catch(err => console.log(err))
    },
    fetchBannerData({commit}){
      axios.get('./data/banner.json')
      .then(res => {
        commit('BANNER_INIT', res.data)
      })
      .catch(err => console.log(err))
    },
    fetchGalleryData({commit}){
      axios.get('./data/gallery.json')
      .then(res => {
        commit('GALLERY_INIT', res.data)
      })
      .catch(err => console.log(err))
    },
    fetchInfoData({commit}){
      axios.get('./data/info.json')
      .then(res => {
        commit('INFO_INIT', res.data)
      })
      .catch(err => console.log(err))
    },
    fetchNewsData({commit}){
      axios.get('./data/new.json')
      .then(res => {
        commit('NEWS_INIT', res.data)
      })
      .catch(err => console.log(err))
    },
    fetchMovieData({commit}){
      axios.get('./data/movie.json')
      .then(res => {
        
        commit('MOVIE_INIT', res.data)
      })
      .catch(err => console.log(err))
    }
  },
  mutations: {
    MENU_INIT(state, payload) {
      state.menuData = payload
    },
    VISUAL_INIT(state, payload){
      state.visualData = payload
    },
    BANNER_INIT(state, payload){
      state.bannerData = payload
    },
    GALLERY_INIT(state, payload){
      state.galleryData = payload
    },
    INFO_INIT(state, payload){
      state.infoData = payload
    },
    NEWS_INIT(state, payload){
      state.newsData = payload
    },
    MOVIE_INIT(state, payload){
      state.movieData = payload
    }
  },
  getters: {
    getMenuData(state) {
      return state.menuData
    },
    getVisualData(state){
      return state.visualData
    },
    getBannerData(state){
      return state.bannerData
    },
    getGalleryData(state){
      return state.galleryData
    },
    getInfoData(state){
      return state.infoData
    },
    getNewsData(state){
      return state.newsData
    },
    getMovieData(state){
      return state.movieData
    }
  }
})