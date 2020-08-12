import Navigation from "./Navigation";
import React from "react";
import {Route, Switch} from "react-router-dom";
import Exams from "./ExamsContainer/Exams";
import ExamDetail from "./ExamDetailContainer/ExamDetail";
import Users from "./UsersContainer/Users";
import UserDetail from "./UserDetailContainer/UserDetail";
import ExamAddForm from "../components/exams/ExamAddForm";
import Footer from "./Footer";
import Home from "./Home";
import RedirectToNotFound from "./RedirectToNotFound";
import {WrappMeTenderly} from "./Home.styled";

export default function DefaultRoutes() {
return(
    <WrappMeTenderly>
        <Navigation/>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/exams" component={Exams}/>
            <Route exact path="/exams/:id" component={ExamDetail}/>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/users/:username" component={UserDetail}/>
            <Route exact path="/add" component={ExamAddForm}/>
            <Route component={RedirectToNotFound}/>
        </Switch>
        <Footer/>
    </WrappMeTenderly>
);
}
