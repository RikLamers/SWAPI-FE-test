<template>
  <header class="container-fluid c-header">
    <nav>
      <div class="row">
        <div class="col-12">
          <router-link to="/">
            <img class="c-header__logo" src="@/assets/img/logo.png" alt="Logo Star Wars - Home link" />
          </router-link>
        </div>
      </div>
    </nav>
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
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'Header',
  components: {
    SearchBar
  }
}
</script>
