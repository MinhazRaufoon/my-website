import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3aMZhbvdWbPpDJsB7sfp45_WBbMM3RT8",
  authDomain: "mraufoon.firebaseapp.com",
  projectId: "mraufoon",
  storageBucket: "mraufoon.appspot.com",
  messagingSenderId: "303052968157",
  appId: "1:303052968157:web:050256bc7591ea71a70b34",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
