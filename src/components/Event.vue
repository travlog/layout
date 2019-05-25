<template>
  <div class="event" @click="expand = !expand">
    <div class="information" :class="{ expand: expand }">
      <div class="event-datetime">
        <div>{{ event.date | stripYear }}</div>
        <div>{{ event.time }}</div>
      </div>
      <div class="event-details">
        <div>
          <strong>{{ event.do }}</strong>
        </div>
        <div>{{ event.place }}, {{ event.city }}</div>
      </div>
      <div style="flex: 0;">{{ event.price }} {{ event.currency }}</div>
    </div>
    <div class="meta" v-show="expand">
      <div class="meta-note">{{ event.note }}</div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
// date: '',
// time: '',
// timezone: '',
// country: '',
// city: '',
// place: '',
// do: '',
// note: '',
// currency: 'KRW',
// price: 0,
// done: false
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      expand: false
    }
  },
  filters: {
    stripYear (value) {
      return format(value, 'MM/DD')
    }
  }
}
</script>

<style>
.event {
  padding: 1rem .5rem;
  border: 1px solid rgba(33, 33, 33, 0.25);
  border-radius: 3px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.event .information {
  display: flex;
}

.event .information.expand {
}

.event-details {
  flex: 1;
}
.event-datetime {
  flex: 0;
  margin-right: .5rem;
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

/* meta */
.meta-note {
  margin-top: .5rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
