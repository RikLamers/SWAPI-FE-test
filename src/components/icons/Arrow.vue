<template>
  <svg x="0px" y="0px" viewBox="0 0 6.8 12" :height="height" :width="width">
    <g :fill="isDisabled ? '#A8A8A8' : fill" :transform="`rotate(${rotateDeg})`" >
      <path d="M6.6,6.6l-5.2,5.2c-0.3,0.3-0.9,0.3-1.2,0c-0.3-0.3-0.3-0.9,0-1.2L4.8,6L0.2,1.4c-0.3-0.3-0.3-0.9,0-1.2 c0.3-0.3,0.9-0.3,1.2,0l5.2,5.2C6.8,5.6,6.8,5.8,6.8,6C6.8,6.2,6.8,6.4,6.6,6.6z"/>
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
    rotateDeg: {
      type: [Number, String],
      default: '0'
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
