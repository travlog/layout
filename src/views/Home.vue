<template>
  <div class="home">
    <div class="today">
      오늘<br>
      {{ (new Date()).toLocaleDateString() }}
    </div>
    <div>
      <div>다가오는 일정</div>
      <div>

      </div>
    </div>
    <div>
      <div @click="$router.push({ name: 'trips-id', params: { id: 1 } })">
        <h1>MY TRIP</h1>
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
  font-size: 2rem;
}
</style>
