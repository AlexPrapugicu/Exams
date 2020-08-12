import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import {PageWrapper} from "./App.styled";
import StartPage from "./containers/StartPage";
import DefaultRoutes from "./containers/DefaultRoutes";
import PageNotFound404 from "./containers/PageNotFound404";
import LoginContainer from "./containers/auth/LoginContainer";
import RegisterContainer from "./containers/auth/RegisterContainer";


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route component={PageNotFound404} path="/404NotFound"/>
                    <Route exact path="/">
                        <PageWrapper>
                            <StartPage/>
                        </PageWrapper>
                    </Route>
                    <Route exact path="/register" component={RegisterContainer}/>
                    <Route exact path="/login" component={LoginContainer}/>
                    <Route component={DefaultRoutes}/>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
