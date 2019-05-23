<template>
  <div class="new-trip">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="">출발하는 날</label>
        <input type="date">
      </div>
      <div class="form-group">
        <label for="">시작 도시</label>
        <v-select :options="cityNames" v-model="departure" />
      </div>

      <hr>

      <div class="form-group">
        <label for="">돌아오는 날</label>
        <input type="date">
      </div>

      <div class="form-group">
        <label for="">마지막 도시</label>
        <v-select :options="cityNames" v-model="arrived" />
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
  data () {
    return {
      cities: require('@/locations.json'),
      departure: '',
      arrived: ''
    }
  },
  computed: {
    cityNames () {
      return this.cities.map(c => c.city)
    }
  },
  methods: {
    onSubmit () {
      console.log('hello world')
    }
  }
}
</script>

<style lang="scss">
</style>
