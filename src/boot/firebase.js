import * as firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyBx-7h7oPmbokgcORhpVcNhohOtV1AdrU0',
  authDomain: 'awesome-todo-2d568.firebaseapp.com',
  databaseURL: 'https://awesome-todo-2d568.firebaseio.com',
  projectId: 'awesome-todo-2d568',
  storageBucket: 'awesome-todo-2d568.appspot.com',
  messagingSenderId: '848140383727',
  appId: '1:848140383727:web:cf201310389e2f1494f21a',
  measurementId: 'G-CGGQDB4JKC',
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();
export { firebaseAuth, firebaseDb };
