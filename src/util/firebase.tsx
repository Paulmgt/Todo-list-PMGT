// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDd1_7h_jwhw4QLGr8zORPknXFZuqJSFOo',
  authDomain: 'listes-de-course.firebaseapp.com',
  projectId: 'listes-de-course',
  storageBucket: 'listes-de-course.appspot.com',
  messagingSenderId: '981128672048',
  appId: '1:981128672048:web:55dd3636f3e88fc2d4cef5',
  measurementId: 'G-HFKF2XPLQT',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
