<template>
  <div>
    <main class="container">
      <div class="v-characters">
        <section class="characters">
          <Title title="Star Wars Characters" />
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-3">
              <Dropdown :options="genderFilters.filters" :title="genderFilters.title" @input="receivedGender" />
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
              <Dropdown :options="viewFilters.filters" :title="viewFilters.title" @input="receivedView" />
            </div>
          </div>
          <div class="row">
            <Loader v-if="!characters.results" />
            <div v-else v-for="(character, index) of displayedPosts" :key="character + index" :class="selectedView === 'Grid' ? 'col-12 col-lg-6 d-flex' : 'col-12'">
              <Card :view="selectedView" type="character" :data="character" />
            </div>
          </div>
        </section>
        <div class="row">
          <div class="col-12">
            <Pagination :paginationCount="maxAmountOfPosts" :itemNumbMin="((this.currentPage - 1) * this.characters.postsPerPage) + 1" :itemNumbMax="((currentPage - 1) * characters.postsPerPage) + displayedPosts.length" :previousAvail="currentPage > 1" :nextAvail="currentPage < (Math.ceil(maxAmountOfPosts / this.characters.postsPerPage))" @requestNewData="newPageRequest" />
          </div>
        </div>
        <ErrorList />
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Card from '@/components/Card.vue'
import Dropdown from '@/components/Dropdown.vue'
import ErrorList from '@/components/ErrorList.vue'
import Loader from '@/components/Loader.vue'
import Pagination from '@/components/Pagination.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'characters',
  components: {
    Card,
    Dropdown,
    ErrorList,
    Loader,
    Pagination,
    Title
  },
  data () {
    return {
      genderFilters: {
        title: 'Filter',
        filters: ['All', 'Male', 'Female', 'Hermaphrodite', 'Robot']
      },
      viewFilters: {
        title: 'View',
        filters: ['Grid', 'List']
      },
      selectedGender: null,
      selectedView: null,
      currentPage: 1,
      startIndex: null,
      endIndex: null
    }
  },
  methods: {
    receivedGender (gender) {
      this.currentPage = 1
      this.selectedGender = gender
    },
    receivedView (view) {
      this.selectedView = view
    },
    newPageRequest (previousOrNext) {
      if (previousOrNext === 'next') {
        this.currentPage++
      } else if (previousOrNext === 'previous') {
        this.currentPage--
      }
    }
  },
  created () {
    // Dispatch API call
    if (!this.characters.results) {
      this.$store.dispatch('getCharacterData')
    }
  },
  computed: {
    ...mapState([
      'characters'
    ]),
    displayedPosts () {
      const filteredCharacterObj = this.$store.getters.filteredCharacters(this.selectedGender)
      const start = (this.currentPage - 1) * this.characters.postsPerPage
      const end = start + this.characters.postsPerPage
      if (filteredCharacterObj) {
        return filteredCharacterObj.slice(start, end)
      } else {
        return []
      }
    },
    maxAmountOfPosts () {
      const filteredCharacterObj = this.$store.getters.filteredCharacters(this.selectedGender)
      if (filteredCharacterObj) return filteredCharacterObj.length
      return null
    }
  }
}
</script>
