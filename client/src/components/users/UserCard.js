import React from "react";
import {CardWrapper, ImageWrapper, ImgThumbnail, InfoSection, MediaSection} from "./styledCards";

import {faEnvelope, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"


function UserCard({username, password, email, id, role}) {
    return (
        <CardWrapper
        to={`users/${username}`}>
                <ImageWrapper>
                <ImgThumbnail
                    src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
                    alt="Avatar"/>
                </ImageWrapper>
                <InfoSection>
                    {/*<p>id:{id}</p>*/}
                    <p>Username : {username}</p>
                    <p>Email : {email}</p>
                    <p>Role : {role}</p>
                    {/*<p>password:{password}</p>*/}
                </InfoSection>
                <MediaSection>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </MediaSection>
        </CardWrapper>
    );
}

export default UserCard;
