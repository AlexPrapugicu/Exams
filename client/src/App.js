import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import {
    Route,
    BrowserRouter as Router,
    Switch, Link
} from "react-router-dom";
import Exams from "./containers/ExamsContainer/Exams";
import ExamDetail from "./containers/ExamDetailContainer/ExamDetail";
import Users from "./containers/UsersContainer/Users";
import UserDetail from "./containers/UserDetailContainer/UserDetail";
import Login from "./components/Login";
import Register from "./components/Register";
import ExamAddForm from "./components/exams/ExamAddForm";


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div>
                            <ul>
                                <li>
                                    <Link to="/home">
                                        <p>Home</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/exams">
                                        <p>Exams</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/users">
                                        <p>Users</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register">
                                        <p>Register</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Route>
                    <Route exact path="/home">
                        <div>
                            <Login/>
                        </div>
                    </Route>
                    <Route exact path="/exams">
                        <div>
                            <Exams/>
                        </div>
                    </Route>
                    <Route exact path="/exams/:id">
                        <div>
                            <ExamDetail/>
                        </div>
                    </Route>
                    <Route exact path="/users">
                        <div>
                            <Users/>
                        </div>
                    </Route>
                    <Route exact path="/users/:username">
                        <div>
                            <UserDetail/>
                        </div>
                    </Route>
                    <Route exact path="/register">
                        <div>
                            <Register/>
                        </div>
                    </Route>
                    <Route exact path="/login">
                        <div>
                            <Login/>
                        </div>
                    </Route>
                    <Route exact path="/add">
                        <div>
                            <ExamAddForm/>
                        </div>
                    </Route>

                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
