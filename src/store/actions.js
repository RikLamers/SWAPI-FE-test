import uuid from 'uuid'

const baseURL = 'https://swapi.co/api/'

// function to modify Data to add a id and category
const modifyData = (results, category) => {
  const modified = results.map((item) => {
    item.id = uuid()
    item.category = category
    return item
  })
  return modified
}

export default {
  async getCharacterData ({ commit, dispatch }) {
    // Data structure object
    const characterData = {
      count: null,
      postsPerPage: 10,
      maxPages: null,
      results: []
    }

    try {
      // make API call
      let response = await fetch(`${baseURL}people/`)
      // Transfrom to JSON
      let data = await response.json()
      // Add to local variable the max amount of results
      characterData.count = data.count
      // add the max amount of pages
      characterData.maxPages = Math.ceil(data.count / characterData.postsPerPage)
      // Modify the objects to add a ID and category
      characterData.results = modifyData(data.results, 'characters')
      // run mutation to state
      commit('getCharacterData', characterData)
      // dispatch action to get all other data
      if (data.next) {
        dispatch('getAllCharacterData', data.next)
      }
    } catch (error) {
      console.error(error)
    }
  },

  async getAllCharacterData ({ commit }, next) {
    try {
      let response = await fetch(next)
      let data = await response.json()
      // declare local variable and spread the first results
      let results = [...data.results]
      // Loop as long as there is a data.next prop
      while (data.next) {
        response = await fetch(data.next)
        data = await response.json()
        // update local variable with existing data and new data
        results = [...results, ...data.results]
      }
      results = modifyData(results, 'characters')
      commit('addAllCharacters', results)
    } catch (error) {
      console.error(error)
    }
  },

  async getPlanetData ({ commit, dispatch }) {
    const planetData = {
      count: null,
      postsPerPage: 10,
      maxPages: null,
      results: []
    }

    try {
      let response = await fetch(`${baseURL}planets/`)
      let data = await response.json()
      planetData.count = data.count
      planetData.maxPages = Math.ceil(data.count / planetData.postsPerPage)
      planetData.results = modifyData(data.results, 'planets')
      commit('getPlanetData', planetData)
      if (data.next) {
        dispatch('getAllPlanetData', data.next)
      }
    } catch (error) {
      console.error(error)
    }
  },

  async getAllPlanetData ({ commit }, next) {
    try {
      let response = await fetch(next)
      let data = await response.json()
      let results = [...data.results]
      while (data.next) {
        response = await fetch(data.next)
        data = await response.json()
        results = [...results, ...data.results]
      }
      results = modifyData(results, 'characters')
      commit('addAllPlanets', results)
    } catch (error) {
      console.error(error)
    }
  },

  async getStarshipData ({ commit, dispatch }) {
    const starshipData = {
      count: null,
      maxPages: null,
      postsPerPage: 10,
      results: []
    }

    try {
      let response = await fetch(`${baseURL}starships/`)
      let data = await response.json()
      starshipData.count = data.count
      starshipData.maxPages = Math.ceil(data.count / starshipData.postsPerPage)
      starshipData.results = modifyData(data.results, 'starships')
      commit('getStarshipData', starshipData)
      if (data.next) {
        dispatch('getAllStarshipData', data.next)
      }
    } catch (error) {
      console.error(error)
    }
  },

  async getAllStarshipData ({ commit }, next) {
    try {
      let response = await fetch(next)
      let data = await response.json()
      let results = [...data.results]
      while (data.next) {
        response = await fetch(data.next)
        data = await response.json()
        results = [...results, ...data.results]
      }
      results = modifyData(results, 'characters')
      commit('addAllStarships', results)
    } catch (error) {
      console.error(error)
    }
  }

}
