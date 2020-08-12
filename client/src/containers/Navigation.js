import React from "react";
import {Link} from "react-router-dom";
import {HomeWrapper, Navbar, NavItem} from "./Home.styled";
import {logout} from "../actions/userActions";
import {useDispatch} from "react-redux";

export default function Navigation() {

    const dispatch = useDispatch();

    function logoutHandler() {
        return dispatch(logout());
    }

    return (
        <HomeWrapper>
            <Navbar>
                <NavItem>
                    <Link to="/home" style={{textDecoration: "none", color: "white"}}>
                        <p>Home</p>
                    </Link>
                </NavItem>
                {localStorage.getItem("user") === null ?
                    <><NavItem>
                        <Link to="/login"
                              style={{textDecoration: "none", color: "white"}}>
                            <p>Login</p>
                        </Link>
                    </NavItem>
                        <NavItem>
                            <Link to="/register"
                                  style={{textDecoration: "none", color: "white"}}>
                                <p>Register</p>
                            </Link>
                        </NavItem>
                    </> :
                    <><NavItem>
                        <Link to="/exams" style={{textDecoration: "none", color: "white"}}>
                            <p>Exams</p>
                        </Link>
                    </NavItem>
                        <NavItem>
                            <Link to="/users" style={{textDecoration: "none", color: "white"}}>
                                <p>Users</p>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/"
                                  style={{textDecoration: "none", color: "white"}}
                                  onClick={logoutHandler}>
                                <p>Logout</p>
                            </Link>
                        </NavItem></>
                }
            </Navbar>
        </HomeWrapper>
    );
}
