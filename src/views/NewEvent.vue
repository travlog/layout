<template>
  <div class="new-event">
    <div class="page-title">New Event</div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text">
      </div>
      <div class="form-group">
        <input type="text">
      </div>
      <div class="form-group">
        <input type="text">
      </div>
      <div class="form-group">
        <input type="text">
      </div>
      <div class="form-group">
        <input type="submit">
      </div>
    </form>

    <button @click="$router.back()">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit () {}
  }
}
</script>

<style>

</style>
