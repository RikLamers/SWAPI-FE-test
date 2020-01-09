<template>
  <!-- FIXME: right method? -->
  <div v-if="type === 'arrow'" :class="type === 'arrow' ? 'c-pagination--arrow' : null">
    <span>1-8 of 50</span>
    <button>
      <Arrow :isDisabled=leftDisabled rotateDeg="180" height="16px" width="16px" />
    </button>
    <button>
      <Arrow :isDisabled=rightDisabled height="16px" width="16px" />
    </button>
  </div>
  <div v-else class="c-pagination">
    <button>View more</button>
  </div>
</template>

<script>
import Arrow from '@/components/icons/Arrow.vue'

export default {
  props: [
    'type'
  ],
  data () {
    return {
      leftDisabled: true,
      rightDisabled: false
    }
  },
  components: {
    Arrow
  }
}
</script>
