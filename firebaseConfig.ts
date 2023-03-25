import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAg6MEPC_rFimVylCyb4-JG9DcyaoPfLLQ',
  authDomain: 'f1-prode.firebaseapp.com',
  projectId: 'f1-prode',
  storageBucket: 'f1-prode.appspot.com',
  messagingSenderId: '85091325853',
  appId: '1:85091325853:web:f689b0192611798118c174',
  measurementId: 'G-5DVCZBF0HR',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
