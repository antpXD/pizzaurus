import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

import "./style/App.scss";

function App() {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <HomePage />
      </>
    </Provider>
  );
}

export default App;
