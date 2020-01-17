<template>
  <svg v-if="type === 'small'" x="0px" y="0px" viewBox="0 0 6.8 12" :height="height" :width="width">
    <g :fill="isDisabled ? '#A8A8A8' : fill" :transform="`rotate(${rotateDeg})`" >
      <path d="M6.6,6.6l-5.2,5.2c-0.3,0.3-0.9,0.3-1.2,0c-0.3-0.3-0.3-0.9,0-1.2L4.8,6L0.2,1.4c-0.3-0.3-0.3-0.9,0-1.2 c0.3-0.3,0.9-0.3,1.2,0l5.2,5.2C6.8,5.6,6.8,5.8,6.8,6C6.8,6.2,6.8,6.4,6.6,6.6z"/>
    </g>
  </svg>
  <svg v-else x="0px" y="0px" viewBox="0 0 12 8.4" :height="height" :width="width">
    <g :fill="isDisabled ? '#A8A8A8' : fill" :transform="`rotate(${rotateDeg})`" >
      <path d="M8.1,1.9c-0.2-0.2-0.4-0.2-0.6,0c-0.2,0.2-0.2,0.4,0,0.6l3.1,3.1H0.4C0.2,5.6,0,5.8,0,6c0,0.2,0.2,0.4,0.4,0.4 h10.1L7.5,9.5c-0.2,0.2-0.2,0.4,0,0.6c0.2,0.2,0.4,0.2,0.6,0l3.8-3.8c0.2-0.2,0.2-0.4,0-0.6L8.1,1.9z"/>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    fill: {
      type: String,
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
