<template>
  <div v-if="type === 'img-only'" class="c-card" :class="type === 'img-only' ? 'c-card--img-only' : null">
    <router-link :to="`${data.category}/${data.id}`">
      <img src="~@/assets/img/planets/planet-1.jpg" alt="Planet 1" />
      <div class="c-card__footer">
        <h3>{{ data.name }}</h3>
        <p>Population: {{ data.population }}</p>
        <p>Climate: {{ data.climate }}</p>
      </div>
    </router-link>
  </div>
  <div v-else-if="type === 'row'" class="c-card" :class="characterClasses()">
    <router-link :to="`${data.category}/${data.id}`">
      <img class="c-card__img" src="~@/assets/img/characters/character-1.jpg" alt="Star Wars character" />
      <div class="c-card__content">
        <h3>{{ data.name }}</h3>
        <i>Gender: {{ data.gender }}</i>
        <p>Birth year: {{ data.birth_year }}</p>
      </div>
    </router-link>
  </div>
  <div v-else class="c-card">
    <img class="c-card__img" src="~@/assets/img/starships/starship-1.jpg" alt="Star Wars Starships" />
    <div class="c-card__content__bg">
      <div class="c-card__content">
        <h3>{{ data.name }}</h3>
        <p>Model: {{ data.model }}</p>
        <p>passengers: {{ data.passengers }}</p>
        <router-link :to="`${data.category}/${data.id}`">
          Read more <span>></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'type',
    'data',
    'link',
    'view'
  ],
  methods: {
    characterClasses () {
      return {
        'c-card--row': this.type === 'row',
        'c-card__grid': this.view === 'Grid',
        'c-card__list': this.view === 'List'
      }
    }
  }
}
</script>
