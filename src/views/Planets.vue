<template>
  <div>
    <Header />
    <main class="container">
      <div class="v-planets">
        <section class="planets">
          <Title title="Star Wars planets" />
          <div class="row">
            <Loader v-if="!planets.results" />
            <div v-else v-for="(planet, index) of displayedPosts" :key="planet + index" class="col-12 col-md-6 col-lg-4 d-flex">
              <Card type="img-only" :data="planet" :link="planet.category" />
            </div>
          </div>
        </section>
        <div class="row">
          <div class="col-12">
            <Pagination :paginationCount="planets.count" :itemNumbMin="((this.currentPage - 1) * this.planets.postsPerPage) + 1" :itemNumbMax="((currentPage - 1) * planets.postsPerPage) + displayedPosts.length" :previousAvail="currentPage > 1" :nextAvail="currentPage < planets.maxPages" @requestNewData="newPageRequest" />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Loader from '@/components/Loader.vue'
import Pagination from '@/components/Pagination.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'Starships',
  components: {
    Card,
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
    if (!this.planets.results) {
      this.$store.dispatch('getPlanetData')
    }
  },
  computed: {
    ...mapState([
      'planets'
    ]),
    displayedPosts () {
      const start = (this.currentPage - 1) * this.planets.postsPerPage
      const end = start + this.planets.postsPerPage
      if (this.planets.results) {
        return this.planets.results.slice(start, end)
      } else {
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
