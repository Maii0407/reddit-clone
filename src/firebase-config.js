import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBoQYXBcdZj11zGhankUnMATg7o-kjfjEo",
  authDomain: "read-that.firebaseapp.com",
  projectId: "read-that",
  storageBucket: "read-that.appspot.com",
  messagingSenderId: "740397997486",
  appId: "1:740397997486:web:fdc0c232aecd3734173c3f"
};

const app = initializeApp( firebaseConfig );

const database = getFirestore( app );
const auth = getAuth( app );

export { database, auth };