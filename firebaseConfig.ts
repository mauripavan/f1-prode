import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

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
