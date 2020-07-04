import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";
import TopBar from "./components/TopBar";
import ImageResults from "./components/ImageResults";
import ImageZoomed from "./components/ImageZoomed";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <TopBar />

                <Switch>
                    <Route exact path="/" component={ImageResults}></Route>
                    <Route exact path="/:photoId" component={ImageZoomed} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
