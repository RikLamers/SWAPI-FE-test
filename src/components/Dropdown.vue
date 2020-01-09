<template>
  <div class="c-dropdown">
    <label>{{ title }}</label>
    <div class="c-dropdown__container" :tabindex="tabindex" @blur="open = false">
      <div class="c-dropdown__selected" :class="{ open }" @click="open = !open">
        {{ selected }}
      </div>
      <ul class="c-dropdown__list" :class="{ selectHide: !open }">
        <li class="c-dropdown__item" v-for="( option, i ) of options" :key="i" @click="selected = option; open = false; $emit('input', option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      selected: this.options[0],
      open: false
    }
  },
  mounted () {
    this.$emit('input', this.selected)
  }
}
</script>
