<template>
  <div class="new-trip">
    <form @submit.prevent="onSubmit" class="new-trip-form">
      <div style="flex: 1;">
        <div class="form-group">
          <base-input label="여행 이름" property="name" :default-value="name" type="text" @changed="onChanged" />
        </div>

        <div class="form-group">
          <base-input label="떠나는날" type="date" property="departure" :default-value="departure" @changed="onChanged" />&nbsp;
          <base-input label="돌아오는날" type="date" property="arrived" :default-value="arrived" @changed="onChanged" />
        </div>
      </div>

      <div class="form-group">
        <input type="submit" class="button" value="만들기">
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import { format, isAfter, isBefore } from 'date-fns'
import shortId from 'shortid'
import { db } from '@/services'

export default {
  name: 'new-trip',
  components: {
    BaseInput
  },
  data () {
    return {
      name: '',
      departure: format(new Date(), 'YYYY-MM-DD'),
      arrived: format(new Date(), 'YYYY-MM-DD')
    }
  },
  computed: {
    tripName () {
      if (this.name) {
        return this.name
      }
      return `${this.departure}에서 ${this.arrived}까지 여행`
    }
  },
  watch: {
    departure (newDepartue) {
      if (isAfter(newDepartue, this.arrived)) {
        this.$set(this, 'arrived', newDepartue)
      }
    },
    arrived (newArrived) {
      if (isBefore(newArrived, this.departure)) {
        this.$set(this, 'departure', newArrived)
      }
    }
  },
  methods: {
    onChanged ({ property, value }) {
      this.$set(this, property, value)
    },
    async onSubmit () {
      const newTrip = {
        _id: shortId.generate(),
        name: this.tripName,
        departure: this.departure,
        arrived: this.arrived,
        events: []
      }
      db.put(newTrip)
        .then((result) => {
          console.log('newTrip => ', newTrip)
          this.$router.push({ name: 'home' })
        })
    }
  }
}
</script>

<style lang="scss">
.new-trip {
  padding-top: .5rem;
  height: 100% !important;
}

.new-trip-form {
  display: flex;
  flex-direction: column;
  height: 100% !important;
}
</style>
