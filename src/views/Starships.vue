<template>
  <div>
    <Header />
    <main class="container">
      <div class="v-starships">
        <section class="starships">
          <Title title="Star Wars starships" />
          <div class="row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
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
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Pagination from '@/components/Pagination.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'Starships',
  components: {
    Card,
    Footer,
    Header,
    Pagination,
    Title
  }
}
</script>
