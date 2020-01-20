<template>
  <ul class="c-errorlist">
    <li v-for="error of errors" :key="error.id" class="c-errorlist__error">{{ error.message }}<button @click="removeError(error.id)"><Cross fill="#FFFFFF" /></button></li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

import Cross from '@/components/icons/Cross.vue'

export default {
  name: 'ErrorList',
  components: {
    Cross
  },
  computed: {
    ...mapState([
      'errors'
    ])
  },
  methods: {
    removeError (id) {
      this.$store.dispatch('removeErrorMessage', id)
    }
  }
}
</script>
