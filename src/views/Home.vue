<template>
  <div class="home">
    <div class="today">
      오늘<br>
      {{ (new Date()).toLocaleDateString() }}
    </div>
    <div>
      <div class="trip-title">다가오는 일정</div>
    </div>
    <div>
      <div
        @click="$router.push({ name: 'trips-id', params: { id: 1 } })"
        class="trip-item"
      >
        <h1 class="trip-item-title">MY TRIP</h1>
        <div class="trip-item-meta">
          지역, 시작 - :: 지역, 종료 - :;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
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
  margin-bottom: 1rem;
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
</style>
