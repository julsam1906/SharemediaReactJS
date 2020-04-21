import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAGdytn2nPx4EOoO3g--VaOfPGat-zy_vg',
  authDomain: 'sharemedia-76dc6.firebaseapp.com',
  databaseURL: 'https://sharemedia-76dc6.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
