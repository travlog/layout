<template>
  <div class="new-trip">
    <form @submit.prevent="onSubmit" class="new-trip-form">
      <div style="flex: 1;">
        <div class="form-section-title">
          <strong>기본정보</strong>
        </div>
        <div class="form-group">
          <base-input label="여행 이름🚀" property="name" :default-value="name" type="text" @changed="onChanged" />
        </div>

        <div class="form-group">
          <base-input label="떠나는날🛫" type="date" property="departure" :default-value="departure" @changed="onChanged" />&nbsp;
          <base-input label="돌아오는날🛬" type="date" property="arrived" :default-value="arrived" @changed="onChanged" />
        </div>

        <hr>

        <div class="form-section-title">
          <strong>추가정보</strong>
        </div>
        <div class="form-group">
          <base-input label="기준나라🌎" type="text" property="country" :default-value="country" @changed="onChanged" />&nbsp;
          <base-input label="기준도시🏙️" type="text" property="city" :default-value="city" @changed="onChanged" />
        </div>
        <div class="form-group">
          <base-input label="기준 시간대🕒" type="text" property="timezone" :default-value="timezone" @changed="onChanged" />
        </div>
        <div class="form-group">
          <base-input label="기준화폐💱" type="text" property="currency" :default-value="currency" @changed="onChanged" />
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
import cityTimezones from 'city-timezones'
import { db } from '@/services'
import countryCurrencyMap from 'country-currency-map'
export default {
  name: 'new-trip',
  components: {
    BaseInput
  },
  data () {
    return {
      name: '',
      departure: format(new Date(), 'YYYY-MM-DD'),
      arrived: format(new Date(), 'YYYY-MM-DD'),
      currency: 'USD',
      country: '',
      city: '',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
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
    },
    city (newCity) {
      const timezones = cityTimezones.lookupViaCity(newCity)
      if (timezones.length > 0) {
        const timezone = timezones[0]
        this.onChanged({ property: 'city', value: timezone.city })
        this.onChanged({ property: 'country', value: timezone.country })
        this.onChanged({ property: 'timezone', value: timezone.timezone })
      }
    },
    country (newCountry) {
      const currency = countryCurrencyMap.getCurrencyAbbreviation(newCountry)
      if (currency) {
        this.onChanged({ property: 'currency', value: currency })
      }
    }
  },
  methods: {
    onChanged ({ property, value }) {
      console.log('on changed => ', property, ' / ', value)
      this.$set(this, property, value)
    },
    async onSubmit () {
      const newTrip = {
        _id: shortId.generate(),
        name: this.tripName,
        departure: this.departure,
        arrived: this.arrived,
        country: this.country,
        city: this.city,
        timezone: this.timezone,
        currency: this.currency,
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

.form-section-title {
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.2rem;
}
</style>
