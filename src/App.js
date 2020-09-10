import React from "react";
import { Provider } from "react-redux";
import { store } from "./reducers/";
import Home from './pages/home/Home';

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Giphy App</h1>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
