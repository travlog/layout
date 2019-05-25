<template>
  <div class="new-trip">
    <form @submit.prevent="onSubmit" class="new-trip-form">
      <div style="flex: 1;">
        <div class="form-group">
          <base-input label="여행 이름" default-value="" type="text" />
        </div>

        <div class="form-group">
          <base-input label="떠나는날" type="date" :default-value="departure" />&nbsp;
          <base-input label="돌아오는날" type="date" :default-value="arrived" />
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
import { format } from 'date-fns'

export default {
  name: 'new-trip',
  components: {
    BaseInput
  },
  data () {
    return {
      cities: [],
      departure: format(new Date(), 'YYYY-MM-DD'),
      arrived: format(new Date(), 'YYYY-MM-DD')
    }
  },
  methods: {
    onSubmit () {
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
