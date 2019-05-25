<template>
  <div class="home">
    <div class="today">
      오늘<br>
      {{ (new Date()).toLocaleDateString() }}
    </div>
    <div class="new-trip-button">
      <button class="button" @click="$router.push({ name: 'new-trip' })">새 여행 만들기</button>
    </div>
    <div class="trip-listing">
      <div class="trip-title">여행중</div>
      <div
        @click="$router.push({ name: 'trips-id', params: { id: trip._id } })"
        class="trip-item"
        v-for="trip in trips"
        :key="trip.id"
      >
        <h1 class="trip-item-title">{{ trip.name }}</h1>
        <div class="trip-item-meta">
          {{ trip.departure }} 부터 {{ trip.arrived }} 까지 || {{ trip.events.length }} events
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/services'

export default {
  name: 'home',
  data () {
    return {
      trips: []
    }
  },
  async created () {
    const docs = await db.allDocs({ include_docs: true, attachments: true })
    this.trips = docs.rows.map(r => r.doc)
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

.new-trip-button {
  padding-left: .5rem;
  padding-right: .5rem;
  margin-bottom: 1rem;
}

.trip-listing {
  margin-bottom: 1rem;
}
</style>
