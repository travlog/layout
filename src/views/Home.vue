<template>
  <div class="home">
    <div class="today">
      오늘<br>
      {{ (new Date()).toLocaleDateString() }}
    </div>
    <div class="new-trip-button">
      <button class="button" @click="$router.push({ name: 'new-trip' })">새 여행 계획하기</button>
    </div>
    <div>
      <div class="trip-title">여행중</div>
      <div
        @click="$router.push({ name: 'trips-id', params: { id: trip.id } })"
        class="trip-item"
        v-for="trip in inTrips"
        :key="trip.id"
      >
        <h1 class="trip-item-title">{{ trip.name }}</h1>
        <div class="trip-item-meta">
          {{ trip.departure }} 부터 {{ trip.arrived }} 까지
        </div>
      </div>
    </div>
    <div>
      <div class="trip-title">미래</div>
      {{ futureTrips }}
    </div>
    <div>
      <div class="trip-title">과거</div>
      {{ pastTrips }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters(['inTrips', 'pastTrips', 'futureTrips'])
  }
}
</script>

<style>
.home .today {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
}

.trip-title {
  padding-left: .5rem;
  font-size: 1.2rem;
}

.trip-item {
  border-bottom: 1px solid rgba(33, 33, 33, 0.1);
  padding: .5rem;
  display: flex;
  flex-direction: column;
}

.trip-item-title {
  margin: .5rem 0;
}

.trip-item-meta {

}
.new-trip-button {
  padding-left: .5rem;
  padding-right: .5rem;
  margin-bottom: 1rem;
}
</style>
