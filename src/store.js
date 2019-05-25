import Vue from 'vue'
import Vuex from 'vuex'
import localforage from 'localforage'
import shortId from 'shortid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTrip: null,
    currentEvent: null,
    trips: [],
    events: []
  },
  mutations: {
    SET_CURRENT_TRIP () {},
    SET_CURRENT_EVENT () {},
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
    fetchCurrentTrip ({ commit, rootState }, id) {
      const trip = rootState.trips.find(t => t.id === id)
      commit('SET_CURRENT_TRIP', trip)
    },
    fetchCurrentEvent ({ commit, rootState }, id) {
      const event = rootState.events.find(e => e.id === id)
      commit('SET_CURRENT_EVENT', event)
    }
  },
  getters: {
    trips: state => state.trips
  }
})
