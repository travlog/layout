import PouchDB from 'pouchdb-browser'
// import PouchDBFind from 'pouchdb-find'
import shortId from 'shortid'
console.log(shortId)
export const db = new PouchDB('trips')

export const createTrip = () => {}
