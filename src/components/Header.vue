<template>
  <div>
    <header class="container-fluid c-header">
      <div class="c-header__menubtn" @mouseenter="isHovering = true" @mouseleave="isHovering = false" @click="toggleMenu" :class="{ active: show }">
        <div class="c-header__menubtn--inner" :class="{ active: show, hovering: isHovering }"></div>
      </div>
      <div class="c-header__home">
        <div class="row">
          <div class="col-12">
            <router-link to="/">
              <img class="c-header__logo" src="@/assets/img/logo.png" alt="Logo Star Wars - Home link" />
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <div class="c-header__title">
            <img class="c-header__logo" src="@/assets/img/logo.png" alt="Logo Star Wars small" />
            <h1>Directory</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 offset-sm-3">
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <div class="c-header__subtitle">
            <h5>Find your favorite Star Wars Characters, Films, species, Starships and Planets!</h5>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 offset-sm-3 col-xl-4 offset-xl-4">
          <div class="c-header__search">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
    <Menu :show="show" :hovering="isHovering" ref="navigationMenu" @toggleShow="closeMenu" />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'Header',
  components: {
    Menu,
    SearchBar
  },
  data () {
    return {
      show: false,
      animHasRun: false,
      isHovering: false
    }
  },
  methods: {
    toggleMenu () {
      this.show = !this.show
      if (this.show) {
        this.$refs.navigationMenu.animateMenu(this.animHasRun)
        this.animHasRun = true
      }
    },

    closeMenu () {
      this.show = false
    }
  }
}
</script>
