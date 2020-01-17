<template>
  <div class="c-pagination">
    <span>{{ itemNumbMin }}-{{ itemNumbMax }} of {{ paginationCount }}</span>
    <button :disabled="!previousAvail" @click="getNewData('previous')">
      <Arrow type="small" :isDisabled="!previousAvail" rotateDeg="180" height="16px" width="16px" />
    </button>
    <button :disabled="!nextAvail" @click="getNewData('next')">
      <Arrow type="small" :isDisabled="!nextAvail" height="16px" width="16px" />
    </button>
  </div>
</template>

<script>
import Arrow from '@/components/icons/Arrow.vue'

export default {
  props: [
    'type',
    'paginationCount',
    'itemNumbMin',
    'itemNumbMax',
    'previousAvail',
    'nextAvail'
  ],
  components: {
    Arrow
  },
  methods: {
    getNewData (nextOrPrevious) {
      this.$emit('requestNewData', nextOrPrevious)
    }
  }
}
</script>
