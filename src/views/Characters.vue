<template>
  <div>
    <Header />
    <main class="container">
      <div class="v-characters">
        <section class="characters">
          <Title title="Star Wars Characters" :margin="titleMargin" />
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-3">
              <Dropdown :options="genderFilters.filters" :title="genderFilters.title" @input="receivedGender" />
            </div>
            <div class="col-12 col-sm-6 col-lg-3">
              <Dropdown :options="viewFilters.filters" :title="viewFilters.title" @input="receivedView" />
            </div>
          </div>
          <div class="row">
            <Card type="row" />
            <Card type="row" />
            <Card type="row" />
            <Card type="row" />
            <Card type="row" />
            <Card type="row" />
            <Card type="row" />
            <Card type="row" />
          </div>
        </section>
        <div class="row">
          <div class="col-12">
            <Pagination type="arrow" />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Dropdown from '@/components/Dropdown.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Pagination from '@/components/Pagination.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'characters',
  components: {
    Card,
    Dropdown,
    Footer,
    Header,
    Pagination,
    Title
  },
  data () {
    return {
      titleMargin: 'margin-bottom: 50px',
      genderFilters: {
        title: 'Filter',
        filters: ['Male', 'Female', 'Robot']
      },
      viewFilters: {
        title: 'View',
        filters: ['Grid', 'List']
      },
      selectedGender: null,
      selectedView: null
    }
  },
  methods: {
    receivedGender (gender) {
      this.selectedGender = gender
    },
    receivedView (view) {
      this.selectedView = view
    }
  }
}
</script>
