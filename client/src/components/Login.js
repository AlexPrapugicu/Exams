import React, {useState} from "react";
import {Link} from "react-router-dom";
import {} from "./Auth.styled";
import {useDispatch} from "react-redux";
import {registerUser} from "../actions/userActions";
import {Wrapper} from "./Auth.styled";

function Login() {

    const dispatch = useDispatch();

    const [user, setUser] = useState({
        password: "",
        userName: "",
    });

    function handleSubmit(event) {
        event.preventDefault();

        if (user.userName &&  user.password) {
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
               <p>Sign In</p>
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
                   <hr/>
                   <button onClick={() => console.log("I Logged in and sent: ", user)} type="submit">Log in</button>
               </form>
           </div>
           <div>
               <p>Don't have an account? : <Link to={"/register"}>Register</Link></p>
           </div>
       </Wrapper>
    );
}
export default Login;
