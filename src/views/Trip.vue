<template>
  <div class="trip">
    <div class="trip-header" v-if="trip">
      <div class="trip-title">{{ trip.name }}</div>
      <div class="trip-range">{{ trip.departure }} - {{ trip.arrived }}</div>
    </div>
    <hr>
    <div class="trip-body" v-if="trip && trip.events">

      <event v-for="event in trip.events" :key="event._id" :event="event" />
    </div>
    <div class="event-button" :class="{ expand: expand }">
      <div v-if="expand" style="position: relative;" class="new-event-form-wrapper">
        <h4 style="text-align: center; margin: 0; padding: 0; padding-top: 1rem; padding-bottom: 1rem; position: sticky; top: 0; background-color: #fff; flex: 0;">
          새 이벤트
          <img src="@/assets/icons/x.svg" alt="closer" class="closer" @click.prevent="expand = false">
        </h4>
        <form @submit.prevent="onSubmit" style="flex: 1;">
          <div class="form-group">
            <base-input label="날짜📆" property="date" :default-value="newEvent.date" type="date" @changed="onNewEventChanged" />
          </div>
          <div class="form-group">
            <base-input label="시간⌚" property="time" :default-value="newEvent.time" type="time" @changed="onNewEventChanged" />&nbsp;
            <base-input label="시간대🕒" property="timezone" :default-value="newEvent.timezone" type="text" @changed="onNewEventChanged" />
          </div>
          <div class="form-group">
            <base-input label="나라🌎" property="country" :default-value="newEvent.country" type="text" @changed="onNewEventChanged" />&nbsp;
            <base-input label="도시🏙️" property="city" :default-value="newEvent.city" type="text" @changed="onNewEventChanged" />
          </div>
          <div class="form-group">
            <base-input label="장소🏛️" property="place" :default-value="newEvent.place" type="text" @changed="onNewEventChanged" />
          </div>
          <div class="form-group">
            <base-input label="제목🚀" property="do" :default-value="newEvent.do" type="text" @changed="onNewEventChanged" />
          </div>
          <div class="form-group">
            <base-input label="노트📝" property="note" :default-value="newEvent.note" type="text" @changed="onNewEventChanged" />
          </div>
          <div class="form-group">
            <base-input label="비용💰" property="price" :default-value="newEvent.price" type="number" @changed="onNewEventChanged" />&nbsp;
            <base-input label="화폐💱" property="currency" :default-value="newEvent.currency" type="text" @changed="onNewEventChanged" />
          </div>
          <div class="form-group">
            <input type="submit" class="button" value="만들기✈️">
          </div>
        </form>
      </div>
      <div class="opener" v-else @click="expand = true">
        <img src="@/assets/icons/edit-2.svg" alt="추가">
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import Event from '@/components/Event.vue'
import { db } from '@/services'
import shortId from 'shortid'

export default {
  components: {
    BaseInput,
    Event
  },
  created () {
    db.get(this.$route.params.id)
      .then((result) => {
        this.trip = result
        this.newEvent.country = this.trip.country
        this.newEvent.city = this.trip.city
        this.newEvent.timezone = this.trip.timezone
        this.newEvent.currency = this.trip.currency
        this.newEvent.date = this.trip.departure
        if (this.trip.events && this.trip.events.length > 0) {
          const last = this.trip.events[this.trip.events.length - 1]
          this.newEvent.date = last.date
          this.newEvent.country = last.country
          this.newEvent.city = last.city
          this.newEvent.timezone = last.timezone
          this.newEvent.currency = last.currency
        }
      })
  },
  data () {
    return {
      expand: false,
      trip: null,
      newEvent: {
        date: '',
        time: '',
        timezone: '',
        country: '',
        city: '',
        place: '',
        do: '',
        note: '',
        currency: 'KRW',
        price: 0,
        done: false
      }
    }
  },
  methods: {
    async onSubmit () {
      const newEvent = Object.assign({ _id: shortId.generate() }, this.newEvent)
      const { id } = this.$route.params
      db.get(id)
        .then((doc) => {
          doc.events = doc.events || []
          doc.events.push(newEvent)
          return db.put(doc)
        })
        .then(_ => db.get(id))
        .then((doc) => {
          this.trip = doc
          this.expand = false
          this.newEvent = newEvent
          this.newEvent.id = ''
          this.newEvent.place = ''
          this.newEvent.price = 0
          this.newEvent.note = ''
          this.newEvent.do = ''
        })
    },
    onNewEventChanged ({ property, value }) {
      this.$set(this.newEvent, property, value)
    }
  }
}
</script>

<style lang="scss">
.trip {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 60px);
  overflow: hidden;
}

.trip-header {
  flex: 0;
  width: 100%;
  height: 60px;
  min-height: 60px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.trip-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: .5rem;
}

.trip-body {
  flex: 1;
  overflow: auto;
  padding: .5rem;
  margin-bottom: 3rem;
}

.day-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  height: 100%;
}

.day {
  flex: 0;
  min-width: 100px;
  height: 100%;
  text-align: center;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.event-title {
  margin-top: .5rem;
  margin-bottom: .5rem;
  padding-left: .5rem;
}

.event-button {
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  overflow: hidden;
  bottom: 10px;
  right: 10px;
  transition-duration: 0.1s;
  transition-property: width, height;
}

.event-button.expand {
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  right: 0;
  border-radius: 0;
  overflow-y: auto;
  z-index: 1000;
  background-color: #fff;
  border: none;
}

.event-button .opener {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #0032aa;
}

.event-button .closer {
  position: absolute;
  top: 13px;
  right: 13px;
}

.event-type-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.event-type-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #0032aa;
  padding: .5rem;
  width: 100px;
  height: 30px;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.new-event-form-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
