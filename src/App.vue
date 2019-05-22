<template>
  <div id="app">
    <div id="sidebar" v-if="open" class="box">
      <ul>
        <li>
          <button @click="open = false">CLOSE</button>
        </li>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
    <div id="top-nav" class="box">
      <div>
        <button @click="open = true">OPEN</button>
      </div>
      <div>
        <span
          @click="$router.push({ name: 'home' })"
          style="font-weight: bold; font-family: monospace;">
          TRAVELOG
        </span>
      </div>
      <div>
        <button @click="$router.push({ name: 'new-trip' })">NEW</button>
      </div>
    </div>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    goToNew() {}
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
}

#sidebar {
  width: 280px;
  height: 100vh;
  border: 1px solid black;
  padding: .5rem;
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

.form-group input {
  width: 100%;
}

.page-title {
  font-size: 2rem;
  text-align: center;
}
</style>
