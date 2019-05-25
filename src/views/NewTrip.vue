<template>
  <div class="new-trip">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <base-input label="이름" default-value="" type="date" />
      </div>
      <div class="form-group">
        <base-input label="떠나는날" default-value="" type="date" />
        <base-input label="돌아오는날" default-value="" type="date" />
      </div>

      <div class="form-group">
        <input type="submit" class="button" value="만들기">
      </div>

      <div class="form-group">
        <button @click="$router.push({ name: 'home' })">처음으로</button>
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
