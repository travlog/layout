<template>
  <div id="app">
    <div id="sidebar" v-if="open" class="box">
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

#sidebar {
  width: 280px;
  height: 100vh;
  border: 1px solid black;
}

.sidbar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
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
</style>
