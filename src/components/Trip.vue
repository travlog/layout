<template>
  <div class="trip-item" @click="$router.push(route)">
    <h1 class="trip-item-title">
      {{ trip.name }}&nbsp;
      <small>{{ trip.events.length }} events</small>
    </h1>
    <div class="trip-item-meta">
      {{ trip.departure }} 부터 {{ trip.arrived }} 까지
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trip: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
