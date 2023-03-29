// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { Database, ref } from "firebase/database";

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCT-7VYs5I2J77FK9VwZINkDeb5q4Gz0FA",

  authDomain: "react-employee-b01ab.firebaseapp.com",

  projectId: "react-employee-b01ab",

  storageBucket: "react-employee-b01ab.appspot.com",

  messagingSenderId: "485639742583",

  appId: "1:485639742583:web:5c05a17c8ed27cca519272",

  measurementId: "G-HPT10ZWHE3",

  databaseURL:
    "react-employee-b01ab-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const dataRef = ref(db, "employee");


