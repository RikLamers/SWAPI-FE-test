<template>
  <div v-if="type === 'planet'" class="c-card c-card--planet">
    <router-link :to="`${data.category}/${data.id}`">
      <img :src="data.img" alt="Planet 1" />
      <div class="c-card__footer">
        <h3>{{ data.name }}</h3>
        <p>Population: {{ data.population }}</p>
        <p>Climate: {{ data.climate }}</p>
      </div>
    </router-link>
  </div>
  <div v-else-if="type === 'character'" class="c-card c-card--character" :class="characterClasses()">
    <router-link :to="`${data.category}/${data.id}`">
      <img class="c-card__img" :src="data.img" alt="Star Wars character" />
      <div class="c-card__content">
        <h3>{{ data.name }}</h3>
        <i>Gender: {{ data.gender }}</i>
        <p>Birth year: {{ data.birth_year }}</p>
      </div>
    </router-link>
  </div>
  <div v-else class="c-card c-card--starship">
    <img class="c-card__img" :src="data.img" alt="Star Wars Starships" />
    <div class="c-card__content__bg">
      <div class="c-card__content">
        <h3>{{ data.name }}</h3>
        <p>Model: {{ data.model }}</p>
        <p>Cargo capacity: {{ data.cargo_capacity }}</p>
        <router-link :to="`${data.category}/${data.id}`">
          Read more <span class="c-card__icon"><Arrow fill="white" /></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from '@/components/icons/Arrow.vue'

export default {
  name: 'Card',
  props: [
    'type',
    'data',
    'link',
    'view'
  ],
  components: {
    Arrow
  },
  methods: {
    characterClasses () {
      return {
        '': this.view === 'Grid',
        'c-card--character--list': this.view === 'List'
      }
    }
  }
}
</script>
