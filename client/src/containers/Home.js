import React from "react";
import {HomePageWrapper} from "./Home.styled";
import {getLoggedUser, getUserRole} from "../shared/util";


export default function Home() {
    return (
        <HomePageWrapper>
            <div style={{position: "absolute", margin: "15%", color: "white"}}>
                <h1> Hello : {getLoggedUser().toUpperCase()}</h1>
                <h5> You're logged in as : {getUserRole().toLowerCase()}</h5>
            </div>
        </HomePageWrapper>
    );
}
