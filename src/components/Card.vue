<template>
  <div :class="type === 'row' ? 'col-12 col-lg-6' : 'col-12 col-md-6 col-lg-4'">
    <div v-if="type === 'img-only'" class="c-card" :class="type === 'img-only' ? 'c-card--img-only' : null">
      <img src="~@/assets/img/planets/planet-1.jpg" alt="Planet 1" />
      <div class="c-card__footer">
        <h3>Name planet</h3>
      </div>
    </div>
    <div v-else-if="type === 'row'" class="c-card" :class="type === 'row' ? 'c-card--row' : null">
      <img class="c-card__img" src="~@/assets/img/characters/character-1.jpg" alt="Star Wars character" />
      <div class="c-card__content">
        <h3>Dit is een kat</h3>
        <i>Son of Anakin</i>
        <div class="c-card__content__p">
          <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
          <span>
            <a href="#">read More</a>
          </span>
        </div>
      </div>
    </div>
    <div v-else class="c-card">
      <div class="c-card__img"></div>
      <div class="c-card__content__bg">
        <div class="c-card__content">
          <h3>Dit is een kat</h3>
          <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
          <button>Read more <span>></span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'type'
  ]
}
</script>
