export default {
  getCharacterData (state, payload) {
    state.characters = payload
    state.allData = [...state.allData, ...payload.results]
  },

  addAllCharacters (state, payload) {
    state.characters.results = [...state.characters.results, ...payload]
    state.allData = [...state.allData, ...payload]
  },

  getPlanetData (state, payload) {
    state.planets = payload
    state.allData = [...state.allData, ...payload.results]
  },

  addAllPlanets (state, payload) {
    state.planets.results = [...state.planets.results, ...payload]
    state.allData = [...state.allData, ...payload]
  },

  getStarshipData (state, payload) {
    state.starships = payload
    state.allData = [...state.allData, ...payload.results]
  },

  addAllStarships (state, payload) {
    state.starships.results = [...state.starships.results, ...payload]
    state.allData = [...state.allData, ...payload]
  },

  addErrorToArray (state, message, id, error) {
    const errorObj = {
      message,
      id,
      originalError: error
    }
    state.errors = [...state.errors, errorObj]
  },

  removeErrorFromArray (state, id) {
    state.errors = state.errors.filter(error => {
      if (error.id !== id) return error
    })
  }
}
