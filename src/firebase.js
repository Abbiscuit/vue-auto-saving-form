import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDENWNzHqgFDR1e2nkW76h-RaLt4c9bq14',
  authDomain: 'awesome-vue-fire.firebaseapp.com',
  databaseURL: 'https://awesome-vue-fire.firebaseio.com',
  projectId: 'awesome-vue-fire',
  storageBucket: 'awesome-vue-fire.appspot.com',
  messagingSenderId: '792477656837',
  appId: '1:792477656837:web:f21ee409d923e37911796c',
  measurementId: 'G-B48Q6BDSV0'
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
