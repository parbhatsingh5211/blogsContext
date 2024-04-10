import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import './App.css'
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </HashRouter>
  
);
