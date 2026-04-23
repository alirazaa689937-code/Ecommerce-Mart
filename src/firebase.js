import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDL75IQxbxbDFfurdkf2Gumk0e3dIvLMko",
  authDomain: "ecommerce-75350.firebaseapp.com",
  projectId: "ecommerce-75350",
  storageBucket: "ecommerce-75350.firebasestorage.app",
  messagingSenderId: "427632785135",
  appId: "1:427632785135:web:3af24fb096bbdf94ebcd1a",
  measurementId: "G-G4TWRDDV09",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
