import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; //for firebase authorization

const firebaseConfig = {
  apiKey: 'AIzaSyA9--qtxgwXzRsPCSVyjRxIfXF5xQ3ygfw',
  authDomain: 'reactfb-5ee86.firebaseapp.com',
  projectId: 'reactfb-5ee86',
  storageBucket: 'reactfb-5ee86.appspot.com',
  messagingSenderId: '195089275581',
  appId: '1:195089275581:web:ee323ee1e8a42af92175d4',
};

//initialize firebase
initializeApp(firebaseConfig);

//initialze firestore (database)
const db = getFirestore();

//initialize firebase auth
const auth = getAuth();

export { db, auth };
