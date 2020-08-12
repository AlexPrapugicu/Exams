import React from "react";
import {HomePageWrapper} from "./Home.styled";
import {getLoggedUser, getUserRole} from "../shared/util";
import Spinner from "../shared/Spinner";


export default function Home() {
    return (
        <HomePageWrapper>
            <div style={{position: "absolute", margin: "15%", color: "white"}}>
                {localStorage.getItem("user") ? <>
                    <h1> Hello : {getLoggedUser().toUpperCase()}</h1>
                    <h3> You're logged in as : {getUserRole().toLowerCase()}</h3>
                </> : <Spinner/>}
            </div>
        </HomePageWrapper>
    );
}
