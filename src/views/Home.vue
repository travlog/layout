<template>
  <div class="home">
    <h1>DASHBOARD</h1>
    <h2>TODAY - {{ (new Date()).toLocaleDateString() }}</h2>
    <h3>UPCOMING</h3>
    <div>
      <div @click="$router.push({ name: 'trips-id', params: { id: 1 } })">
        <h1>MY TRIP</h1>
      </div>
    </div>
    <h3>LATEST</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
