import React from "react";
import {
    ButtonSection,
    DetailCardWrapper,
    DetailImageSection,
    ImgThumbnail,
    InfoDetailSection,
    InfoDetailWrapper,
    UserInfoSection
} from "./styledCards";

function UserDetailCard({username, user,editMode,startEdit}) {
    return (
        <DetailCardWrapper>
            <DetailImageSection>
                <ImgThumbnail detail
                              src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
                              alt=""/>
                <UserInfoSection>
                    <p>{username}</p>
                    <p>City Country</p>
                </UserInfoSection>
            </DetailImageSection>
            <button onClick={() => startEdit()}>START EDIT</button>
            <button onClick={() => console.log(editMode)}>Check Edit</button>
            <InfoDetailWrapper>
                <InfoDetailSection>
                    <div>
                        <div>email:{user.email}</div>
                        <p>role:{user.role}</p>
                    </div>
                </InfoDetailSection>
                <InfoDetailSection>
                    <div>
                        <p>username:{user.userName}</p>
                        <p>password:{user.password}</p>
                    </div>
                </InfoDetailSection>
            </InfoDetailWrapper>
            <ButtonSection>
                <button>Do somethong</button>
                <button>Do else</button>
                <button>Return</button>
            </ButtonSection>
        </DetailCardWrapper>
    );
}

export default UserDetailCard;
