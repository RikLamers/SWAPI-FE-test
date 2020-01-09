<template>
<div class="c-title" :style="margin ? margin : null">
  <div class="row">
    <div class="col-12">
      <h2>{{ title }}</h2>
      <hr />
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'title',
    'margin'
  ],
  mounted () {
    console.log(this.margin)
  }
}
</script>
