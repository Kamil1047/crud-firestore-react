import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzRLIwDXe-Vwa4_xY-Cy5UOlk2tGQIw98",

  authDomain: "crud-firebase-react-3db21.firebaseapp.com",

  projectId: "crud-firebase-react-3db21",

  storageBucket: "crud-firebase-react-3db21.appspot.com",

  messagingSenderId: "367009431703",

  appId: "1:367009431703:web:c2d215366794aa366469d2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
