<template>
  <div id="app">
    <div id="sidebar" v-if="open" class="box">
      <div class="dimmer" @click="open = false"></div>
      <ul class="sidbar-menu">
        <li class="sidebar-menu-item">
          <button @click="open = false">CLOSE</button>
        </li>
        <router-link class="sidebar-menu-item" tag="li" to="/" @click.native="open = false">
          Home
        </router-link>
        <router-link class="sidebar-menu-item" tag="li" to="/new-trip" @click.native="open = false">
          New Trip
        </router-link>
        <router-link class="sidebar-menu-item" tag="li" to="/setting" @click.native="open = false">
          Settings
        </router-link>
        <router-link class="sidebar-menu-item" tag="li" to="/about" @click.native="open = false">
          About
        </router-link>
      </ul>
    </div>
    <div id="top-nav" class="box">
      <div style="margin-right: 1rem;">
        <button @click="open = true">OPEN</button>
      </div>
      <div style="flex: 1;">
        <span
          @click="$router.push({ name: 'home' })"
          style="font-weight: bold; font-family: monospace; font-size: 1.5rem;">
          {{ title }}
        </span>
      </div>
    </div>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'travlog',
      open: false
    }
  },
  watch: {
    '$route.name' (newRouteName) {
      // const name = newRoute.name
      switch (newRouteName) {
        case 'setting':
          this.title = 'travlog - 설정'
          break
        case 'new-trip':
          this.title = 'travlog - 새 여정'
          break
        default:
          this.title = 'travlog'
          break
      }
    }
  },
  methods: {
    reload () {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
@import url(https://fonts.googleapis.com/earlyaccess/nanumgothic.css);

$vs-dropdown-max-height: 200px;

html, body, #app {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Nanum Gothic", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

#sidebar {
  width: 100vw;
  height: 100vh;
  display: inline-block;
  border: 1px solid black;
  z-index: 1000;
  background: transparent;
  position: fixed;
}

.sidbar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  width: 280px;
  z-index: 1000;
  height: 100vh;
  background-color: #fff;
}

.sidebar-menu-item {
  width: 100%;
  border: 1px solid black;
  padding: 1rem .5rem;
  margin-bottom: .5rem;
}

#top-nav {
  width: 100%;
  height: 60px;
  border: 1px solid black;
  padding: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#main {
  overflow: auto;
  height: calc(100% - 60px);
}

.form-group {
  width: 100%;
  padding: .5rem 1rem;
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
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 10
}
</style>
