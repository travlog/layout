import Vue from 'vue'
import Vuex from 'vuex'
import localforage from 'localforage'
import shortId from 'shortid'
import { format, isBefore, isAfter, isEqual } from 'date-fns'

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
      const trips = await localforage.getItem('trips')
      const events = await localforage.getItem('events')
      if (!trips) {
        await localforage.setItem('trips', [])
      }
      if (!events) {
        await localforage.setItem('events', [])
      }

      commit('INITIALIZE_TRIPS', trips || [])
      commit('INITIALIZE_EVENTS', events || [])
    },
    async createTrip ({ commit }, { name, departure, arrived }) {
      const trips = await localforage.getItem('trips')
      const newTrip = {
        id: shortId.generate(),
        name,
        departure,
        arrived,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      trips.push(newTrip)
      return localforage.setItem('trips', trips)
        .then(_ => {
          commit('INITIALIZE_TRIPS', trips)
          return localforage.getItem('trips')
        })
    },
    async createEvent ({ commit }, eventParams) {
      const events = await localforage.getItem('trips')
      const newEvent = {
        ...eventParams,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      events.push(newEvent)
      return localforage.setItem('events', events)
        .then(_ => {
          commit('INITIALIZE_TRIPS', events)
          return localforage.getItem('events')
        })
    },
    async fetchCurrentTrip ({ commit, rootState }, id) {
      const trips = await localforage.getItem('trips')
      const events = await localforage.getItem('events')
      const trip = trips.find(t => t.id === id)
      commit('INITIALIZE_TRIPS', trips || [])
      commit('INITIALIZE_EVENTS', events || [])
      commit('SET_CURRENT_TRIP', trip)
    },
    async fetchCurrentTripEvents ({ commit }, id) {
      const events = await localforage.getItem('events')
      const tripEvents = events.find(e => e.tripId === id)
      commit('SET_CURRENT_TRIP_EVENTS', tripEvents || [])
    },
    fetchCurrentEvent ({ commit, rootState }, id) {
      const event = rootState.events.find(e => e.id === id)
      commit('SET_CURRENT_EVENT', event)
    }
  },
  getters: {
    trips: state => state.trips,
    currentTrip: state => state.currentTrip,
    currentEvent: state => state.currentEvent,
    currentTripEvents: state => state.currentTripEvents,
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
