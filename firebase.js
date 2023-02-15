import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB1t5UnnUiqCnJ3d6AWF9fhGrOvOCg8VN4",
  authDomain: "wallbergai.firebaseapp.com",
  projectId: "wallbergai",
  storageBucket: "wallbergai.appspot.com",
  messagingSenderId: "696725851511",
  appId: "1:696725851511:web:93bd163e1a630fcf0da572"
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
