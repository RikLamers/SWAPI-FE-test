<template>
<div class="c-title">
  <div class="row">
    <div class="col-12">
      <router-link v-if="link" :to="link">
        <h2>{{ title }}</h2>
      </router-link>
      <h2 v-else>{{ title }}</h2>
      <hr />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Title',
  props: [
    'link',
    'title'
  ]
}
</script>
