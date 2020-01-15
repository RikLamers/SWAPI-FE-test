export default {
  getCharacterData (state, payload) {
    state.characters = payload
  },

  addAllCharacters (state, payload) {
    state.characters.results = [...state.characters.results, ...payload]
  },

  getPlanetData (state, payload) {
    state.planets = payload
  },

  addAllPlanets (state, payload) {
    state.planets.results = [...state.planets.results, ...payload]
  },

  getStarshipData (state, payload) {
    state.starships = payload
  },

  addAllStarships (state, payload) {
    state.starships.results = [...state.starships.results, ...payload]
  }
}
