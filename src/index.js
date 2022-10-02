import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { initializeApp } from 'firebase/app';


// Your web app's Firebase configuration process.env
const firebaseConfig = {
  apiKey: "AIzaSyCFg58B7fhSrdZomoe-TPGCUqnJbrNmkPA",
  authDomain: "tiendamatte-1b773.firebaseapp.com",
  projectId: "tiendamatte-1b773",
  storageBucket: "tiendamatte-1b773.appspot.com",
  messagingSenderId: "240784531074",
  appId: "1:240784531074:web:50b67a57d8dcfbc82c1e9b"
};

const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);



