<template>
  <div class="c-menu" :class="{ active: show, hovering: hovering }" @mousemove="moveImgOnMouseMove($event)">
    <div class="c-menu__bg">
      <img :style="transformOffset" :src="imgUrls[hoveredItem]" alt="Star Wars related image to hover" />
    </div>
    <div class="c-menu__bg--overlay"></div>
    <div class="c-menu__list">
      <ul ref="menu" class="c-menu__items">
        <router-link to="/" exact>
          <li @mouseenter="mouseMovement('home')" @click="menuItemClicked" class="c-menu__item">
            <h1>Home</h1>
            <div class="c-menu__bar"></div>
          </li>
        </router-link>
        <router-link to="/characters">
          <li @mouseenter="mouseMovement('characters')" @click="menuItemClicked" class="c-menu__item">
            <h1>Characters</h1>
            <div class="c-menu__bar"></div>
          </li>
        </router-link>
        <router-link to="/planets">
          <li @mouseenter="mouseMovement('planets')" @click="menuItemClicked" class="c-menu__item">
            <h1>Planets</h1>
            <div class="c-menu__bar"></div>
          </li>
        </router-link>
        <router-link to="/starships">
          <li @mouseenter="mouseMovement('starships')" @click="menuItemClicked" class="c-menu__item">
            <h1>Starships</h1>
            <div class="c-menu__bar"></div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'Menu',
  props: [
    'show',
    'hovering'
  ],
  data () {
    return {
      transformOffset: {
        transform: null
      },
      hoveredItem: 'home',
      imgUrls: {
        home: require('../assets/img/logo.png'),
        characters: require('../assets/img/transparant-vader.png'),
        planets: require('../assets/img/transparant-planet.png'),
        starships: require('../assets/img/transparant-starship.png')
      }
    }
  },
  created () {
    gsap.set(this.$refs.menu, {
      top: window.innerheight,
      rotateX: '30deg',
      transfrom: 'translateZ(-250px)'
    })
  },
  methods: {
    moveImgOnMouseMove (e) {
      // Get all width props
      const width = window.innerWidth
      const posX = e.clientX
      const halfWidth = width / 2
      // Get all height props
      const height = window.innerHeight
      const posY = e.clientY
      const halfHeight = height / 2
      // Calculate position X
      const widthCenterZero = posX - halfWidth
      // 30 is max value
      const offsetXPos = (widthCenterZero / halfWidth) * 30
      // Calculate postion Y
      const heightCenterZero = posY - halfHeight
      const offsetYPos = (heightCenterZero / halfHeight) * -30
      // Set styling property
      this.transformOffset.transform = `perspective(550px) rotateY(${offsetXPos}deg) rotateX(${offsetYPos}deg)`
    },

    animateMenu (isCalled) {
      if (!isCalled) {
        const menuTl = gsap.timeline()

        menuTl
          .to(this.$refs.menu, 5, {
            top: 0,
            rotateX: '30deg',
            transfrom: 'translateZ(-250px)'
          })
      } else {
        gsap.set(this.$refs.menu, {
          top: 0,
          rotateX: '30deg',
          transfrom: 'translateZ(-250px)'
        })
      }
    },

    mouseMovement (item) {
      this.hoveredItem = item
    },

    menuItemClicked () {
      this.$emit('toggleShow')
    }
  }
}
</script>
