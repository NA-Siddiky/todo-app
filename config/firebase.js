// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import getAuth from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-IcOvjYYrkOwUpulilRdoqN7-Zfki5Ls',
  authDomain: 'todo-app-login-ba986.firebaseapp.com',
  projectId: 'todo-app-login-ba986',
  storageBucket: 'todo-app-login-ba986.appspot.com',
  messagingSenderId: '26446610053',
  appId: '1:26446610053:web:fbb42683e1ef23606bb3ec',
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the auth instance
const auth = getAuth(app);

// Export the auth instance
export default auth;
