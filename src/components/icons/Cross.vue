<template>
  <svg x="0px" y="0px" viewBox="0 0 12 12" :height="height" :width="width">
    <g :fill="isDisabled ? '#A8A8A8' : fill" >
     <path d="M7.3,6l4.5-4.5C11.9,1.4,12,1.2,12,1c0-0.2-0.1-0.3-0.2-0.5l-0.4-0.4C11.3,0.1,11.1,0,10.9,0c-0.2,0-0.3,0.1-0.5,0.2 L6,4.7L1.5,0.2C1.4,0.1,1.2,0,1,0C0.9,0,0.7,0.1,0.6,0.2L0.2,0.6c-0.3,0.3-0.3,0.7,0,0.9L4.7,6l-4.5,4.5C0.1,10.6,0,10.8,0,10.9 s0.1,0.3,0.2,0.5l0.4,0.4C0.7,11.9,0.9,12,1,12c0.2,0,0.3-0.1,0.5-0.2L6,7.3l4.5,4.5c0.1,0.1,0.3,0.2,0.5,0.2h0 c0.2,0,0.3-0.1,0.5-0.2l0.4-0.4c0.1-0.1,0.2-0.3,0.2-0.5s-0.1-0.3-0.2-0.5L7.3,6z"/>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: [String],
      default: '#505050'
    },
    height: {
      type: [Number, String],
      default: 15
    },
    width: {
      type: [Number, String],
      default: 15
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scope>
  g {
    transform-origin: center center;
  }
</style>
