import React, {useState} from "react";
import {Wrapper} from "./Auth.styled";
import {registerUser} from "../actions/userActions";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";


function Register() {

    const dispatch = useDispatch();

    const [user, setUser] = useState({
        email: "",
        password: "",
        userName: "",
    });

    function handleSubmit(event) {
        event.preventDefault();

        if (user.userName && user.email && user.password) {
            dispatch(registerUser(user));
        }
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setUser(user => ({
                ...user,
                [name]: value
            })
        );
    }

    return (
        <Wrapper>
            <div>
                <p>Registration</p>
            </div>
            <div>
                <p>Let's get you started</p>
            </div>
            <div>
                <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                    <label>Username</label>
                    <input type="text"
                           placeholder="Username"
                           name="userName"
                           style={{textAlign: "center"}}
                           onChange={handleChange}/>
                    <label>Password</label>
                    <input type="text"
                           placeholder="Password"
                           name="password"
                           style={{textAlign: "center"}}
                           onChange={handleChange}/>
                    <label>Email</label>
                    <input type="text"
                           placeholder="Email"
                           name="email"
                           style={{textAlign: "center"}}
                           onChange={handleChange}/>
                    <hr/>
                    <button onClick={() => console.log("I Registered and sent: ", user)} type="submit">Register</button>
                </form>
            </div>
            <div>
                <p>Already have an account? : <Link to={"/login"}>Sign In</Link></p>
            </div>
        </Wrapper>
    );
}

export default Register;
