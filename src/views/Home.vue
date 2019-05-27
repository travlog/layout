<template>
  <div class="home">
    <div class="today">
      <div style="font-size: 1.4rem; font-weight: bold;">오늘</div>
      {{ today }}
    </div>
    <div v-if="tripExists" class="trip-listing">
      <div class="trip-title">여행 목록</div>
      <trip v-for="trip in trips" :key="trip._id" :trip="trip" :route="{ name: 'trips-id', params: { id: trip._id } }" />
    </div>
    <div v-else class="trip-listing empty">
      첫번째 여행을 만들어보세요✈️
    </div>
    <div class="new-trip-button">
      <button class="button" @click="$router.push({ name: 'new-trip' })">새 여행 만들기🎈</button>
    </div>
  </div>
</template>

<script>
import Trip from '@/components/Trip.vue'
import { db } from '@/services'
import { format } from 'date-fns'
import koLocale from 'date-fns/locale/ko'

export default {
  name: 'home',
  components: {
    Trip
  },
  data () {
    return {
      trips: []
    }
  },
  computed: {
    tripExists () {
      return this.trips && this.trips.length > 0
    },
    today () {
      return format(new Date(), 'YYYY년 MM월 DD일 dddd', { locale: koLocale })
    }
  },
  async created () {
    const docs = await db.allDocs({ include_docs: true, attachments: true })
    this.trips = docs.rows.map(r => r.doc)
  }
}
</script>

<style>
.home {
  height: 100% !important;
  display: flex;
  flex-direction: column;
}

.home .today {
  padding-top: 1rem;
  padding-bottom: 1rem;
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
  flex: 1;
  margin-bottom: 1rem;
}
.trip-listing.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  padding: 1rem;
  text-align: center;
}
</style>
