<template>
  <div>
    <Header />
    <main class="container">
      <div class="v-starships">
        <section class="starships">
          <Title title="Star Wars starships" />
          <div class="row">
            <Loader v-if="!starships.results" />
            <div v-else v-for="(starship, index) of displayedPosts" :key="starship + index" class="col-12 col-md-6 col-lg-4 d-flex">
              <Card :data="starship" :link="starship.category" />
            </div>
          </div>
        </section>
        <div class="row">
          <div class="col-12">
            <Pagination :paginationCount="starships.count" :itemNumbMin="((this.currentPage - 1) * this.starships.postsPerPage) + 1" :itemNumbMax="((currentPage - 1) * starships.postsPerPage) + displayedPosts.length" :previousAvail="currentPage > 1" :nextAvail="currentPage < starships.maxPages" @requestNewData="newPageRequest" />
          </div>
        </div>
        <ErrorList />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Card from '@/components/Card.vue'
import ErrorList from '@/components/ErrorList.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Loader from '@/components/Loader.vue'
import Pagination from '@/components/Pagination.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'Starships',
  components: {
    Card,
    ErrorList,
    Footer,
    Header,
    Loader,
    Pagination,
    Title
  },
  data () {
    return {
      currentPage: 1,
      startIndex: null,
      endIndex: null
    }
  },
  created () {
    // dispatch API call
    if (!this.starships.results) {
      this.$store.dispatch('getStarshipData')
    }
  },
  computed: {
    ...mapState([
      'starships'
    ]),
    displayedPosts () {
      // calculate start index of array of starships
      const start = (this.currentPage - 1) * this.starships.postsPerPage
      // calculate end index of array of starships
      const end = start + this.starships.postsPerPage
      if (this.starships.results) {
        // Return 10 starships at a time
        return this.starships.results.slice(start, end)
      } else {
        // return empty array to prevent error messages
        return []
      }
    }
  },
  methods: {
    newPageRequest (previousOrNext) {
      if (previousOrNext === 'next') {
        this.currentPage++
      } else if (previousOrNext === 'previous') {
        this.currentPage--
      }
    }
  }
}
</script>
