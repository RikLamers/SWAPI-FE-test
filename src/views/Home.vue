<template>
  <div>
    <Header />
    <main class="container">
      <div class="v-home">
        <section class="starships">
          <Title title="Populair Starships" link="/starships" />
          <div class="row">
            <Loader v-if="!starships.results" />
            <div v-else v-for="(starship, index) of sliceStarshipData" :key="starship + index" class="col-12 col-md-6 col-lg-4 d-flex">
              <Card :data="starship" />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="v-home__viewmore">
                <router-link to="/starships">View more</router-link>
              </div>
            </div>
          </div>
        </section>
        <section class="planets">
          <Title title="Populair Planets" link="/planets" />
          <div class="row">
            <Loader v-if="!planets.results" />
            <div v-else class="col-12 col-md-6 col-lg-4" v-for="(planet, index) of slicePlanetData" :key="planet + index">
              <Card type="img-only" :data="planet" />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <ul class="c-carousel__list">
                <li class="c-carousel__item"></li>
                <li class="c-carousel__item is--active"></li>
                <li class="c-carousel__item"></li>
              </ul>
            </div>
          </div>
        </section>
        <section class="characters">
          <Title title="Populair Characters" link="/characters" />
          <div class="row">
            <Loader v-if="!characters.results" />
            <div v-else v-for="(character, index) of sliceCharacterData" :key="character + index" class="col-12 col-lg-6 d-flex">
              <Card type="row" :data="character" />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="v-home__viewmore">
                <router-link to="/characters">View more</router-link>
              </div>
            </div>
          </div>
        </section>
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
import Title from '@/components/Title.vue'

export default {
  name: 'home',
  components: {
    Card,
    ErrorList,
    Footer,
    Header,
    Loader,
    Title
  },
  created () {
    if (!this.characters.results) this.$store.dispatch('getCharacterData')
    if (!this.planets.results) this.$store.dispatch('getPlanetData')
    if (!this.starships.results) this.$store.dispatch('getStarshipData')
  },
  computed: {
    ...mapState([
      'characters',
      'planets',
      'starships'
    ]),
    sliceCharacterData () {
      return this.characters.results.slice(0, 4)
    },
    slicePlanetData () {
      return this.planets.results.slice(0, 9)
    },
    sliceStarshipData () {
      return this.starships.results.slice(0, 6)
    }
  }
}
</script>
