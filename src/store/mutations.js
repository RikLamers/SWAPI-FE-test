export default {
  getCharacterData (state, payload) {
    // Set initial payload to state
    state.characters = payload
    // spread data to state of allData combined
    state.allData = [...state.allData, ...payload.results]
  },

  addAllCharacters (state, payload) {
    // Spread previous state on state + new payload
    state.characters.results = [...state.characters.results, ...payload]
    // Add to allData state the new data
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
    // create error object
    const errorObj = {
      message,
      id,
      originalError: error
    }
    // spread all errors + add new error object
    state.errors = [...state.errors, errorObj]
  },

  removeErrorFromArray (state, id) {
    state.errors = state.errors.filter(error => {
      if (error.id !== id) return error
    })
  }
}
