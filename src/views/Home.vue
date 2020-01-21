<template>
  <div>
    <main class="container">
      <div class="v-home">
        <section class="starships">
          <Title title="Popular Starships" link="/starships" />
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
          <Title title="Popular Planets" link="/planets" />
          <div class="row">
            <Loader v-if="!planets.results" />
            <div v-else class="col-12">
              <div class="v-home__carousel">
                <vueper-slides
                  class="no-shadow"
                  :arrows="false"
                  :visible-slides="3"
                  :touchable="false"
                  :gap="3"
                  :slideMultiple="3"
                  :breakpoints="slideBreakpoints">
                  <vueper-slide
                    v-for="planet of slicePlanetData"
                    :key="planet.id"
                  >
                    <template v-slot:content>
                      <div class="c-card c-card--planet">
                        <router-link :to="`${planet.category}/${planet.id}`">
                          <img :src="planet.img" alt="Star Wars planet" />
                          <div class="c-card__footer">
                            <h3>{{ planet.name }}</h3>
                            <p>Population: {{ planet.population }}</p>
                            <p>Climate: {{ planet.climate }}</p>
                          </div>
                        </router-link>
                      </div>
                    </template>
                  </vueper-slide>
                </vueper-slides>
              </div>
            </div>
          </div>
        </section>
        <section class="characters">
          <Title title="Popular Characters" link="/characters" />
          <div class="row">
            <Loader v-if="!characters.results" />
            <div v-else v-for="(character, index) of sliceCharacterData" :key="character + index" class="col-12 col-lg-6 d-flex">
              <Card type="character" :data="character" />
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import Card from '@/components/Card.vue'
import ErrorList from '@/components/ErrorList.vue'
import Loader from '@/components/Loader.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'home',
  components: {
    Card,
    ErrorList,
    Loader,
    Title,
    VueperSlides,
    VueperSlide
  },
  data () {
    return {
      slideBreakpoints: {
        992: {
          visibleSlides: 2,
          gap: 3,
          slideMultiple: 2
        },
        768: {
          visibleSlides: 1,
          gap: 0,
          slideMultiple: 1
        }
      }
    }
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
      if (this.characters.results) return this.characters.results.slice(0, 4)
      return []
    },
    slicePlanetData () {
      if (this.planets.results) return this.planets.results.slice(0, 9)
      return []
    },
    sliceStarshipData () {
      if (this.starships.results) return this.starships.results.slice(0, 6)
      return []
    }
  }
}
</script>
