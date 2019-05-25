<template>
  <div class="new-trip">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <base-input label="시작일" default-value="" type="date" />
      </div>
      <div class="form-group">
        <base-input label="시작 나라" default-value="" />&nbsp;
        <base-input label="시작 도시" default-value="" />
      </div>

      <br>

      <div class="form-group">
        <base-input label="돌아오는 날" default-value="" type="date" />
      </div>
      <div class="form-group">
        <base-input label="도착 나라" default-value="" />&nbsp;
        <base-input label="도착 도시" default-value="" />
      </div>

      <div class="form-group">
        <input type="submit" class="button" value="만들기">
      </div>

      <div class="form-group">
        <button @click="$router.back()">Back</button>
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'

export default {
  name: 'new-trip',
  components: {
    BaseInput
  },
  data () {
    return {
      cities: [],
      departure: '',
      arrived: ''
    }
  },
  computed: {
    cityNames () {
      return this.cities.map(c => `${c.city} / ${c.country}`)
    }
  },
  methods: {
    onSubmit () {
      const departure = this.cities.find(c => this.departure && this.departure.includes(c.city))
      const arrived = this.cities.find(c => this.arrived && this.arrived.includes(c.city))

      const canSubmit = !!departure && !!arrived
      console.log(canSubmit)
    }
  }
}
</script>

<style lang="scss">
.new-trip {
  padding-top: .5rem;
  height: 100%;
}
</style>
