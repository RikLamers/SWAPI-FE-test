export default {

  getDetails: state => (array, id) => {
    return state[array].results.filter(item => {
      if (item.id === id) return item
    })
  },

  filteredCharacters: state => filterBy => {
    if (filterBy) {
      filterBy = filterBy.toLowerCase()
      if (filterBy === 'all') {
        return state.characters.results
      } else if (filterBy !== 'robot') {
        return state.characters.results.filter(item => {
          if (item.gender === filterBy) return item
        })
      } else {
        return state.characters.results.filter(item => {
          if (item.gender === 'n/a' || item.gender === 'none') return item
        })
      }
    }
  }

}
