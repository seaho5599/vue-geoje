import axios from 'axios'

const state = {
  gnbData:[]
}
const actions = {
  fetchGnbData({commit}){
    axios.get('./data/menu.json')
    .then(response => {
        console.log(response.data)
        commit('GNB_INIT', response.data)
      }
    )
    .catch(err => console.log(err))
  }
}
const mutations = {
  GNB_INIT(state, payload){
    state.gnbData = payload
  }
}
const getters ={
  getGnbData(state){
    return state.gnbData
  }
}

export default { state, actions, mutations, getters }