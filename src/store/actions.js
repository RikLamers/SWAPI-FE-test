export default {
  getAllData ({ commit }) {
    fetch('https://swapi.co/api/people/')
      .then(response => {
        return response.json()
      })
      .then(data => {
        commit('getInitData', data.results)
      })
      .catch(err => {
        throw new Error(`Base data api call error: ${err}`)
      })
  }
}
