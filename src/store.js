import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTrip: null,
    currentEvent: null,
    currentTripEvents: [],
    trips: [],
    events: []
  },
  mutations: {
    SET_CURRENT_TRIP (state, payload) {
      state.currentTrip = payload
    },
    SET_CURRENT_EVENT (state, payload) {
      state.currentEvent = payload
    },
    SET_CURRENT_TRIP_EVENTS (state, payload) {
      state.currentTripEvents = payload
    },
    INITIALIZE_TRIPS (state, payload) {
      state.trips = payload
    },
    INITIALIZE_EVENTS (state, payload) {
      state.events = payload
    }
  },
  actions: {
    async initializeStorage ({ commit }) {
    },
    async createTrip ({ commit }, { name, departure, arrived }) {
    },
    async createEvent ({ commit }, eventParams) {
    },
    async fetchCurrentTrip ({ commit, rootState }, id) {
    },
    async fetchCurrentTripEvents ({ commit }, id) {
    },
    fetchCurrentEvent ({ commit, rootState }, id) {
    }
  },
  getters: {
    trips: state => state.trips,
    currentTrip: state => state.currentTrip,
    currentEvent: state => state.currentEvent,
    currentTripEvents: state => tripId => state.events.filter(e => e.tripId === tripId),
    events: state => state.events,
    inTrips: state => state.trips.filter(trip => {
      const now = format(new Date(), 'YYYY-MM-DD')
      return (isEqual(now, trip.departure) || isEqual(now, trip.arrived)) ||
      (isBefore(now, trip.arrived) && isAfter(now, trip.departure))
    }),
    pastTrips: state => state.trips.filter(trip => {
      const now = format(new Date(), 'YYYY-MM-DD')
      return isAfter(now, trip.arrived) && isAfter(now, trip.departure)
    }),
    futureTrips: state => state.trips.filter(trip => {
      const now = format(new Date(), 'YYYY-MM-DD')
      return isBefore(now, trip.arrived) && isBefore(now, trip.departure)
    })
  }
})
