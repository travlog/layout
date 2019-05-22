<template>
  <div class="new-trip">
    <h2 class="page-title">New Trip</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="">Name</label>
        <input type="text">
      </div>
      <div class="form-group">
        <label for="">Start Date</label>
        <input type="date">
      </div>
      <div class="form-group">
        <label for="">End Date</label>
        <input type="date">
      </div>
      <div class="form-group">
        <input type="submit">
      </div>
      <div class="form-group">
        <button @click="$router.back()">Back</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'new-trip',
  methods: {
    onSubmit() {
      console.log('hello world')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
