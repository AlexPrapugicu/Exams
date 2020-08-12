import React from "react";
import {
    ButtonSection,
    DetailCardWrapper,
    DetailImageSection, FancyButton,
    ImgThumbnail,
    InfoDetailSection,
    InfoDetailWrapper,
    UserInfoSection, UserText
} from "./styledCards";
import {getUserRole} from "../../shared/util";

function UserDetailCard({username, user, startEdit}) {
    return (
        <DetailCardWrapper>
            <DetailImageSection>
                <ImgThumbnail detail
                              src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
                              alt=""/>
                <UserInfoSection>
                    <UserText>{username.toUpperCase()}</UserText>
                    <UserText>City Country</UserText>
                </UserInfoSection>
            </DetailImageSection>

            <InfoDetailWrapper>
                <InfoDetailSection>
                    <UserInfoSection>
                        <UserText>email:{user.email}</UserText>
                        <UserText>role:{user.role}</UserText>
                    </UserInfoSection>
                </InfoDetailSection>
                <InfoDetailSection>
                    <UserInfoSection>
                        <UserText>username:{user.userName}</UserText>
                        <UserText>password:{user.password}</UserText>
                    </UserInfoSection>
                </InfoDetailSection>
            </InfoDetailWrapper>
            <ButtonSection>
                {
                    getUserRole() === "admin" || getUserRole() === "professor" ?
                        <FancyButton onClick={() => startEdit()}>START EDIT</FancyButton>
                        : <></>
                }
            </ButtonSection>
        </DetailCardWrapper>
    );
}

export default UserDetailCard;
