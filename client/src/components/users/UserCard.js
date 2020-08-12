import React from "react";
import {
    CardWrapper,
    FancyIcon,
    IconWrapper,
    ImageWrapper,
    ImgThumbnail,
    InfoSection,
    MediaSection,
    UserText
} from "./styledCards";

import {faEnvelope, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from "@fortawesome/free-brands-svg-icons"


function UserCard({username, email, role}) {
    return (
        <CardWrapper
            to={`users/${username}`}>
            <ImageWrapper>
                <ImgThumbnail
                    src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
                    alt="Avatar"/>
            </ImageWrapper>
            <InfoSection>
                <UserText>Username : {username}</UserText>
                <UserText>Email : {email}</UserText>
                <UserText>Role : {role}</UserText>
            </InfoSection>
            <MediaSection>
                <IconWrapper>
                    <FancyIcon icon={faEnvelope}/>
                </IconWrapper>
                <IconWrapper>
                    <FancyIcon icon={faFacebook}/>
                </IconWrapper>
                <IconWrapper>
                    <FancyIcon icon={faPaperPlane}/>
                </IconWrapper>
            </MediaSection>
        </CardWrapper>
    );
}

export default UserCard;
