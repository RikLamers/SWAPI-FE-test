<template>
  <div class="c-table">
    <div class="c-table__header">

    </div>
    <div class="c-table__body">
      <div class="c-table__row" v-for="(value, key, index) of data" :key="index">
        <div class="c-table__column" v-if="typeof value !== 'object'">
          {{ key | removeUnderscore | capatalize }}:
        </div>
        <div class="c-table__column" v-if="typeof value !== 'object'">
          {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'data'
  ],
  filters: {
    removeUnderscore (value) {
      if (value.includes('_')) {
        return value.split('_').join(' ')
      }
      return value
    },
    capatalize (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
