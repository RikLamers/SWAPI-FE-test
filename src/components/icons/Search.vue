<template>
  <svg x="0px" y="0px" viewBox="0 0 11.6 12" :height="height" :width="width">
    <g :fill="isDisabled ? '#A8A8A8' : fill">
      <path id="Shape" class="st0" d="M12.4,10.9l-2.8-3c0.7-0.9,1.1-2,1.1-3.1C10.7,2.2,8.5,0,5.8,0S1,2.2,1,4.8s2.2,4.8,4.8,4.8 c1,0,2-0.3,2.8-0.9l2.9,3c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.4-0.2C12.6,11.5,12.6,11.1,12.4,10.9z M5.8,1.3 c2,0,3.6,1.6,3.6,3.6S7.8,8.4,5.8,8.4S2.3,6.8,2.3,4.8S3.9,1.3,5.8,1.3z"/>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
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
