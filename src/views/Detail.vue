<template>
  <div>
    <Header />
    <main class="container">
      <div class="v-detail">
        <section class="detail">
          <Title :title="detailedData.name" :margin="titleMargin" />
          <div class="v-detail__content">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="v-detail__center">
                  <img src="~@/assets/img/planets/planet-2.jpg" alt="Planeetje" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="v-detail__center">
                  <Table :data="detailedData" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Table from '@/components/Table.vue'
import Title from '@/components/Title.vue'

export default {
  components: {
    Footer,
    Header,
    Table,
    Title
  },
  data () {
    return {
      titleMargin: 'margin-bottom: 50px',
      detailedData: {}
    }
  },
  created () {
    // split the path at /
    const splitLink = this.$route.path.split('/')
    // get the array to search
    const arrayToSearch = splitLink[1]
    // get the id to search in the array
    const id = this.$route.params.id
    // get the data based on the id
    this.detailedData = this.$store.getters.getDetails(arrayToSearch, id)[0]
    delete this.detailedData.id
    delete this.detailedData.url
    delete this.detailedData.category
    delete this.detailedData.created
    delete this.detailedData.edited
    if (this.detailedData.homeworld) {
      delete this.detailedData.homeworld
    }
  }
}
</script>
