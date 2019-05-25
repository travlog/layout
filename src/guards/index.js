import store from '../store'

export const setTrip = (to, from, next) => {
  if (store.getters.trips && store.getters.trips.length === 0) {
    store.dispatch('initializeStorage')
  }
  if (!to.params.id) {
    next('/')
  }
  store.dispatch('fetchCurrentTrip', to.params.id)
  next()
}
