import React from "react";
import { Provider } from "react-redux";
import { store } from "./reducers/";
import Home from './pages/home/Home';

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="main__container" data-testid="main__container">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
