<template>
  <div class="trip">
    <div class="trip-header">
      <ul class="day-list">
        <li class="day">1일차</li>
        <li class="day">2일차</li>
        <li class="day">3일차</li>
        <li class="day">4일차</li>
        <li class="day">5일차</li>
        <li class="day">6일차</li>
        <li class="day">7일차</li>
      </ul>
    </div>
    <div class="trip-body">
      <div class="event-header">
        <h2 class="event-title">1일차</h2>
      </div>
      <ul class="event-list">
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
      </ul>
    </div>
    <div class="event-button" :class="{ expand: expand }">
      <div v-if="expand" style="position: relative;">
        <h4 style="text-align: center; margin: 0; padding: 0; margin-bottom: 1rem;"> 새 이벤트 선택기</h4>
        <ul class="event-type-list">
          <li class="event-type-item" @click="$router.push({ name: 'new-event', query: { trip: 1, eventtype: 'flight' } })">비행기</li>
          <li class="event-type-item" @click="$router.push({ name: 'new-event', query: { trip: 1, eventtype: 'hotel' } })">호텔</li>
          <li class="event-type-item" @click="$router.push({ name: 'new-event', query: { trip: 1, eventtype: 'taxi' } })">택시</li>
          <li class="event-type-item" @click="$router.push({ name: 'new-event', query: { trip: 1, eventtype: 'train' } })">기차</li>
          <li class="event-type-item" @click="$router.push({ name: 'new-event', query: { trip: 1, eventtype: 'bus' } })">버스</li>
          <li class="event-type-item" @click="$router.push({ name: 'new-event', query: { trip: 1, eventtype: 'restaurant' } })">음식점</li>
          <li class="event-type-item" @click="$router.push({ name: 'new-event', query: { trip: 1, eventtype: 'activity' } })">액티비티</li>
          <li class="event-type-item" @click="$router.push({ name: 'new-event', query: { trip: 1, eventtype: 'note' } })">기타(노트)</li>
        </ul>
        <button class="closer" @click="expand = false">닫기</button>
      </div>
      <div class="opener" v-else @click="expand = true">
        추가
      </div>
    </div>
  </div>
</template>

<script>
const events = [
  { id: 1, type: 'flight', startDate: +(new Date()), endDate: +(new Date()), title: '', note: '', tz: '' },
  { id: 2, type: 'hotel', startDate: +(new Date()), endDate: +(new Date()), title: '', note: '', tz: '' },
  { id: 2, type: 'restaurant', startDate: +(new Date()), endDate: +(new Date()), title: '', note: '어쩌구 저쩌구', tz: '' },
  { id: 2, type: 'place', startDate: +(new Date()), endDate: +(new Date()), title: '', note: '어쩌구 저쩌구', tz: '' },
  { id: 2, type: 'place', startDate: +(new Date()), endDate: +(new Date()), title: '', note: '어쩌구 저쩌구', tz: '' },
  { id: 2, type: 'place', startDate: +(new Date()), endDate: +(new Date()), title: '', note: '어쩌구 저쩌구', tz: '' },
  { id: 2, type: 'place', startDate: +(new Date()), endDate: +(new Date()), title: '', note: '어쩌구 저쩌구', tz: '' },
  { id: 2, type: 'place', startDate: +(new Date()), endDate: +(new Date()), title: '', note: '어쩌구 저쩌구', tz: '' },
  { id: 2, type: 'place', startDate: +(new Date()), endDate: +(new Date()), title: '', note: '어쩌구 저쩌구', tz: '' }
]

console.log(events)

export default {
  data () {
    return {
      expand: false
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
  height: 200px;
  bottom: 0;
  right: 0;
  border-radius: 0;
  overflow-y: hidden;
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
</style>
