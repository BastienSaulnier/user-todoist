import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store/index.js";
import Bar from "./components/Bar/index.js";
import Home from "./pages/Home/index.js";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./redux/store/index.js";
import "./index.scss";

import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <div className="App">
      <Bar />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:taskName" component={Home} />
          <Route exact path="/add" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
