<template>
  <div>
    <div class="c-searchbar">
      <button class="c-searchbar__btn">
        <Search fill="black" />
      </button>
      <input v-model="searchTerm" @keyup="searchAllArrays()" class="c-searchbar__input" type="search" placeholder="Enter a search term" />
    </div>
    <ul class="c-searchbar__list" v-if="searchTerm.length > 0">
      <li class="c-searchbar__item" v-for="(data, index) of searchedData" :key="data.name + index">
        <router-link :to="`${data.category}/${data.id}`">
          {{ data.name }}<span>{{ data.category }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Search from '@/components/icons/Search.vue'

export default {
  components: {
    Search
  },
  data () {
    return {
      searchTerm: '',
      searchedData: []
    }
  },
  computed: {
    ...mapState([
      'allData'
    ])
  },
  methods: {
    searchAllArrays () {
      this.searchedData = []
      if (this.searchTerm !== '') {
        this.allData.filter(item => {
          if (item.name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
            this.searchedData.push(item)
          }
        })
        this.searchedData = this.searchedData.slice(0, 5)
        this.searchedData = this.sortSearchesASC(this.searchedData)
        if (this.searchedData.length === 0) {
          this.searchedData.push({
            name: 'No search Result!'
          })
        }
      }
    },
    sortSearchesASC (data) {
      return data.sort((obj1, obj2) => {
        if (obj1.name > obj2.name) {
          return 1
        } else {
          return -1
        }
      })
    }
  }
}
</script>
