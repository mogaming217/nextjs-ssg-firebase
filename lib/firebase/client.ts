import 'firebase/analytics'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = (() => {
  if (firebase.apps.length !== 0) {
    return firebase.app()
  }

  const app = firebase.initializeApp({
    apiKey: process.env.PUBLIC_API_KEY,
    authDomain: process.env.PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.PUBLIC_DATABASE_URL,
    projectId: process.env.PUBLIC_PROJECT_ID,
    storageBucket: process.env.PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.PUBLIC_APP_ID,
    measurementId: process.env.PUBLIC_MEASUREMENT_ID,
  })

  return app
})()

if (process.browser) {
  app.analytics()
}

export const firestore = firebase.firestore()
export const auth = firebase.auth()
