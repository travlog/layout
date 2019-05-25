<template>
  <div class="trip">
    {{ currentTrip }}
    <hr>
    {{ currentTripEvents }}
    <!-- <div class="trip-header">
      <ul class="day-list">
        <li class="day">1일차</li>
        <li class="day">2일차</li>
        <li class="day">3일차</li>
        <li class="day">4일차</li>
        <li class="day">5일차</li>
        <li class="day">6일차</li>
        <li class="day">7일차</li>
      </ul>
    </div> -->
    <div class="trip-body">
      <!-- <div class="event-header">
        <h2 class="event-title">1일차</h2>
      </div> -->
      <!-- <ul class="event-list">
        <li class="event">
          <div class="event-card">
            <div class="event-icon">아이콘</div>
            <div class="event-body">
              <div>TITLE</div>
              <div>SUBTITLE</div>
            </div>
            <div class="event-action">$123</div>
          </div>
        </li>
        <li class="event">
          <div class="event-card">
            <div class="event-icon">아이콘</div>
            <div class="event-body">
              <div>TITLE</div>
              <div>SUBTITLE</div>
            </div>
            <div class="event-action">$123</div>
          </div>
        </li>
      </ul> -->
    </div>
    <div class="event-button" :class="{ expand: expand }">
      <div v-if="expand" style="position: relative;" class="new-event-form-wrapper">
        <h4 style="text-align: center; margin: 0; padding: 0; padding-top: 1rem; padding-bottom: 1rem; position: sticky; top: 0; background-color: #fff; flex: 0;">
          새 이벤트 <button @click.prevent="expand = false">닫기</button>
        </h4>
        <form @submit.prevent="createEvent" style="flex: 1;">
          <div class="form-group">
            <base-input label="날짜" property="name" :default-value="newEvent.date" type="date" />
          </div>
          <div class="form-group">
            <base-input label="시간" property="time" :default-value="newEvent.time" type="time" />
          </div>
          <div class="form-group">
            <base-input label="시간대" property="timezone" :default-value="newEvent.timezone" type="text" />
          </div>
          <div class="form-group">
            <base-input label="나라" property="country" :default-value="newEvent.country" type="text" />
          </div>
          <div class="form-group">
            <base-input label="도시" property="city" :default-value="newEvent.city" type="text" />
          </div>
          <div class="form-group">
            <base-input label="장소" property="place" :default-value="newEvent.place" type="text" />
          </div>
          <div class="form-group">
            <base-input label="제목" property="do" :default-value="newEvent.do" type="text" />
          </div>
          <div class="form-group">
            <base-input label="비용" property="price" :default-value="newEvent.price" type="number" />
          </div>
          <div class="form-group">
            <base-input label="화폐" property="currency" :default-value="newEvent.currency" type="text" />
          </div>
          <div class="form-group">
            <base-input label="노트" property="note" :default-value="newEvent.note" type="text" />
          </div>
          <div class="form-group">
            <input type="submit">
          </div>
        </form>
      </div>
      <div class="opener" v-else @click="expand = true">
        추가
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BaseInput from '@/components/BaseInput.vue'

export default {
  components: {
    BaseInput
  },
  created () {
    this.fetchCurrentTrip(this.$route.params.id)
    this.fetchCurrentTripEvents(this.$route.params.id)
  },
  data () {
    return {
      expand: false,
      // 언제 - 날짜: 2019년 06월 6일,
      // 언제 - 시간: 오후 12시,
      // 어디서 - 도시/나라: 프랑크푸르트(독일),
      // 어디서 - 장소 : 음식점 A,
      // 무엇을: 학센을 먹음,
      // 비용: 얼마
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
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }
  },
  computed: {
    ...mapGetters(['currentTrip', 'currentTripEvents'])
  },
  methods: {
    ...mapActions(['fetchCurrentTrip', 'fetchCurrentTripEvents'])
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
}

.trip-body {
  flex: 1;
  overflow: auto;
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

.event-list {
  padding: 0;
  margin: 0;
  padding: 0.5rem;
}

.event {
  padding: 1rem;
  border: 1px solid black;
  margin-bottom: 1rem;
}

.event-card {
  display: flex;
  justify-content: space-between;
}

.event-icon {
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0;
  min-width: 50px;
}

.event-body {
  flex: 1;
}

.event-action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0;
  min-width: 50px;
}

.event-button {
  position: fixed;
  width: 60px;
  height: 60px;
  border: 1px solid black;
  border-radius: 100%;
  overflow: hidden;
  bottom: 10px;
  right: 10px;
  transition: all 0.1s ease-in-out;
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
}

.event-button .opener {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.event-button .closer {
  position: absolute;
  top: 0;
  right: 0;
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
  border: 1px solid black;
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
