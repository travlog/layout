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
    <div class="event-header">
      <h2>Events</h2>
    </div>
    <div class="trip-body">
      <ul class="event-list">
        <li class="event" @click="$router.push({ name: 'events-id', params: { id: 1 } })">
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
          <button @click="$router.push({ name: 'new-event' })">New Event</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
