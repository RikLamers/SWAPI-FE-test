<template>
  <div>
    <Header />
    <main class="container">
      <div class="v-home">
        <section class="characters">
          <div class="row">
            <div class="col-12">
              <h2>Populair Starships</h2>
              <hr />
            </div>
          </div>
          <div class="row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div class="row">
            <div class="col-12">
              <Pagination />
            </div>
          </div>
        </section>
        <section class="planets">
          <div class="row">
            <div class="col-12">
              <h2>Populair Planets</h2>
              <hr />
            </div>
          </div>
          <div class="row">
            <Card type="img-only" />
            <Card type="img-only" />
            <Card type="img-only" />
          </div>
          <div class="row">
            <div class="col-12">
              <ul>
                <li></li>
                <li class="is--active"></li>
                <li></li>
              </ul>
            </div>
          </div>
        </section>
        <section class="characters">
          <div class="row">
            <div class="col-12">
              <h2>Populair Characters</h2>
              <hr />
            </div>
          </div>
          <div class="row">
            <Card type="row" />
            <Card type="row" />
            <Card type="row" />
            <Card type="row" />
          </div>
          <div class="row">
            <div class="col-12">
              <Pagination />
            </div>
          </div>
        </section>
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
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'home',
  components: {
    Card,
    Footer,
    Header,
    Pagination
  },
  created () {
    this.$store.dispatch('getAllData')
  },
  computed: {
    ...mapState([
      'characters'
    ])
  }
}
</script>
