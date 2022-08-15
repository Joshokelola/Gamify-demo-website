// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAplXtHLCrPJMwupRxeRsP7ZCY59s-dPEk",
  authDomain: "fooderlich.firebaseapp.com",
  projectId: "fooderlich",
  storageBucket: "fooderlich.appspot.com",
  messagingSenderId: "309740898159",
  appId: "1:309740898159:web:8711d452f8f01492c68a9a",
  measurementId: "G-XD0S94SPC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener('click', () => {
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex');
})