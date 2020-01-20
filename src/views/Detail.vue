<template>
  <div>
    <Header />
    <main class="container">
      <div class="v-detail">
        <section class="detail">
          <Title :title="detailedData.name" :margin="titleMargin" />
          <div class="v-detail__content">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="v-detail__img">
                  <div class="v-detail__label">
                    <img src="@/assets/img/logo-black.png" alt="Star Wars logo" />
                  </div>
                  <div class="v-detail__container">
                    <img :src="detailedData.img" alt="Image of the subject" />
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="v-detail__center">
                  <Table :data="detailedData" />
                </div>
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
import ErrorList from '@/components/ErrorList.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Table from '@/components/Table.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'Detail',
  components: {
    ErrorList,
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
    // get the array to search (characters, planets, starships) out of the route
    const arrayToSearch = splitLink[1]
    // get the id to search in the array
    const id = this.$route.params.id
    // get the data based on the id
    this.detailedData = this.$store.getters.getDetails(arrayToSearch, id)[0]
  }
}
</script>
