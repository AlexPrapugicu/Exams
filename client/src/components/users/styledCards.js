import styled from "styled-components"
import {Link} from "react-router-dom";


export const ImgThumbnail = styled.img`
  width: 150px;
  height: 150px;
  border-radius: ${props => props.detail ? "50%": "50%"};
  border: ${props => props.detail ? "5px solid rgba(255,227,107,1)" : "2px solid rgba(255,255,255,0.6)"};
`;

export const InfoSection = styled.div`
  margin-bottom: 5%;
  text-align: center;
  background: rgba(0,0,0,0.2);
  color: black;
  font-size: 1.1em;
  border-bottom: 2px solid rgba(0,0,0,0.2);
  border-radius: 10%;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.7);
`;

export const MediaSection = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-evenly;
`;

export const ImageWrapper = styled.div`
  text-align: center;
  background-image: linear-gradient(90deg, rgba(1,0,15,0.8) 0%, rgba(121,9,109,0.8) 62%, rgba(0,212,255,0.8) 100%);
`;


export const CardWrapper = styled(Link)`
flex: 1 0 calc(21% - 2px);
background: linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,243,190,0.5) 46%, rgba(255,227,107,0.5) 100%);
margin: 4%;
padding: 1%;
border: 2px solid rgba(0,0,0,0.3);
border-radius: 5%;
box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.2);
max-width: 15%;
`;


export const DetailCardWrapper = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  margin: 5%;
  background: linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,243,190,0.7) 46%, rgba(255,227,107,0.7) 100%);
`;

export const DetailImageSection = styled.div`
  display: inline-flex;
  border-bottom: 1px solid black;
  margin: 2%;
`;

export const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
    margin: 2%;

`;

export const InfoDetailSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoDetailWrapper = styled.div`
display: inline-flex;
justify-content: space-evenly;
margin: 2%;
`;

export const ButtonSection = styled.div`
display: inline-flex;
justify-content: space-evenly;
  margin: 2%;

`;
