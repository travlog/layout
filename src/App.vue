<template>
  <div id="app">
    <div id="top-nav" class="box">
      <div style="margin-right: 1rem;">
        <img src="@/assets/icons/menu.svg" alt="" @click="open = true" style="vertical-align: middle;">
      </div>
      <div style="flex: 1;">
        <span
          @click="$router.push({ name: 'home' })"
          style="font-weight: bold; font-family: monospace; font-size: 2rem; line-height: 24px; color: #fff;">
          {{ title }}
        </span>
      </div>
    </div>
    <div id="main">
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view/>
      </transition>
    </div>
    <div id="sidebar" class="box" :class="{ active: open }">
      <div class="dimmer" @click="open = false"></div>
      <ul class="sidebar-menu">
        <li class="sidebar-menu-brand">
          <img src="@/assets/logo.png" alt="" width="100px">
        </li>
        <router-link class="sidebar-menu-item" tag="li" to="/" @click.native="open = false">
          <img src="@/assets/icons/home.svg" alt="Home" style="vertical-align: middle;">&nbsp;
          처음
        </router-link>
        <router-link class="sidebar-menu-item" tag="li" to="/new-trip" @click.native="open = false">
          <img src="@/assets/icons/send.svg" alt="New Trip" style="vertical-align: middle;">&nbsp;
          새 여행 만들기
        </router-link>
        <router-link class="sidebar-menu-item" tag="li" to="/setting" @click.native="open = false">
          <img src="@/assets/icons/settings.svg" alt="Settings" style="vertical-align: middle;">&nbsp;
          설정
        </router-link>
        <router-link class="sidebar-menu-item" tag="li" to="/about" @click.native="open = false">
          <img src="@/assets/icons/help-circle.svg" alt="About" style="vertical-align: middle;">&nbsp;
          travlog는
        </router-link>
      </ul>
    </div>
    <div class="update-snackbar" v-if="updated">
      <div>
        새 업데이트가 있습니다.
      </div>
      <div>
        <a href="#" @click.prevent="reload">재시작</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    document.addEventListener('swUpdated', this.showRefreshUI)
  },
  beforeDestroy () {
    document.removeEventListener('swUpdated', this.showRefreshUI)
  },
  data () {
    return {
      title: 'travlog',
      open: false,
      prevHeight: 0,
      updated: false
    }
  },
  methods: {
    showRefreshUI () {
      this.updated = true
    },
    reload () {
      window.location.reload()
    },
    beforeLeave (element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter (element) {
      const { height } = getComputedStyle(element)
      element.style.height = this.prevHeight
      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter (element) {
      element.style.height = 'auto'
    }
  }
}
</script>

<style lang="scss">
html, body, #app {
  margin: 0;
  padding: 0;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  -webkit-touch-callout: none;
}

* {
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

#sidebar {
  width: 100vw;
  height: 100vh;
  display: inline-block;
  border: 1px solid black;
  z-index: 0;
  background: transparent;
  position: fixed;
  opacity: 0;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
}

#sidebar.active {
  z-index: 1000;
  opacity: 1;
}

.sidebar-menu-brand {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  background-color: #FFFBFA;
  border-bottom: 1px solid rgba(33, 33, 33, 0.1);
}

.sidebar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 50%;
  width: 300px;
  max-width: 80%;
  transform: translateX(-300px);
  z-index: 1000;
  height: 100vh;
  background-color: #fff;
  transition: transform 0.2s;
}

#sidebar.active .sidebar-menu {
  transform: translateX(0);
  transition: transform 0.2s;
}

.sidebar-menu-item {
  width: 100%;
  padding: 1rem;
  margin-bottom: .5rem;
}

#top-nav {
  width: 100%;
  height: 60px;
  padding: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
  background-color: #0032aa;
}

#main {
  overflow: auto;
  height: calc(100% - 60px);
}

.form-group {
  width: 100%;
  padding: .5rem 1rem;
  display: flex;
}

.form-group input[type='text'],
.form-group input[type='submit'],
.form-group input[type='date'] {
  width: 100%;
}

.page-title {
  font-size: 2rem;
  text-align: center;
}

.dimmer {
  position: fixed;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.5s;
}

.active .dimmer {
  width: 100vw;
  height: 100vh;
  opacity: 1;
  z-index: 10;
  transition: opacity 0.5s;
}

.button {
  border: none;
  border-radius: 3px;
  background-color: #5082ff;
  box-shadow: none;
  outline: none;
  padding: 1rem;
  width: 100%;
  color: #fff;
  font-size: 1.2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-property: height, opacity;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.update-snackbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  font-size: 1.2rem;
}
.update-snackbar a {
  color: #fff;
}
</style>
