<template>
  <div id="app">
    <Header />
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
.fade-enter-active {
  animation: fadeIn 1s;
  animation-delay: .75s;
  opacity: 0;
}
.fade-leave-active {
  animation: fadeOut 1s;
}

@keyframes fadeOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50px);
    opacity: 0;
  }
}
@keyframes fadeIn {
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
