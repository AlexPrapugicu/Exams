import styled from "styled-components"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const ImgThumbnail = styled.img`
  max-width: 100px;
  max-height: 160px;
  border-radius: ${props => props.detail ? "45%": "35%"};
  border-bottom: ${props => props.detail ? "5px solid rgba(255,255,255,0.8)" : "2px solid rgba(255,255,255,0.6)"};
  border-left: ${props => props.detail ? "5px solid rgba(255,255,255,0.8)" : "2px solid rgba(255,255,255,0.6)"};
  border-right: ${props => props.detail ? "2px solid rgba(255,255,255,0.6)" : "1px solid rgba(255,255,255,0.4)"};
`;

export const UserText = styled.h1`
font-size: 1.1em;
color: rgba(255,255,255,0.8);
`;

export const InfoSection = styled.div`
  margin-bottom: 5%;
  text-align: center;
  background: rgba(0,0,0,0.7);
  color: white;
  font-size: 1.1em;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  border-left: 2px solid rgba(255,255,255,0.3);
  border-radius: 10%;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.7);
`;

export const MediaSection = styled.div`
cursor: default;
  width: 100%;
  display: inline-flex;
  justify-content: space-evenly;
`;

export const ImageWrapper = styled.div`
  text-align: center;
  background-image: url("https://images.unsplash.com/photo-1469980098053-382eb10ba017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  //linear-gradient(90deg, rgba(0,5,37,1) 0%, rgba(90,91,150,1) 40%, rgba(64,36,36,1) 100%);
  border-bottom: 2px solid rgba(0,0,0,1);
  border-left: 2px solid rgba(0,0,0,1);
`;


export const CardWrapper = styled(Link)`
margin: 2%;
padding: 2%;
flex: 1 0 calc(23% - 2px);
width: 100%;
height: auto;
background: linear-gradient(90deg, rgba(0,5,37,0.7) 0%, rgba(90,91,150,0.8) 40%, rgba(64,36,36,1) 100%);
border: 2px solid rgba(255,255,255,0.5);
border-radius: 5%;
box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.2);
max-width: 15%;
text-decoration: none;
`;


export const DetailCardWrapper = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  margin: 3%;
  background: linear-gradient(90deg, rgba(0,5,37,0.7) 0%, rgba(90,91,150,0.8) 40%, rgba(64,36,36,1) 100%);
`;

export const DetailImageSection = styled.div`
  display: inline-flex;
  margin: 1%;
`;

export const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
    margin: 1%;
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

export const FancyButton = styled.button`
margin: 2%;
color: white;
background: rgba(204,24,70,0.6);
border-radius: 10px;
height: 30px;
border-bottom: 2px solid rgba(255,255,255,0.4);
border-left: 2px solid rgba(255,255,255,0.4);
`;

export const ButtonSection = styled.div`
display: inline-flex;
justify-content: space-evenly;
  margin: 2%;
`;


export const IconWrapper = styled.div`
margin: 1%;
`;

export const FancyIcon = styled(FontAwesomeIcon)`
font-size: 1.2em;
color: white;
cursor: pointer;
`;

export const FancyForm = styled.form`
display: flex;
flex-direction: column;
margin: 2%;
`;
export const FancyInput = styled.input`
  height: 20px;
  background-color: rgba(255,255,255,0.3);
  border: 2px solid rgba(0,0,0,0.5);
  border-radius: 10px;
  width: 100%;
  margin: 2%;
  transition: 0.5s;
  font-size: 1.2em;
  &:hover{
    background-color: rgba(255,255,255,0.6);
    border: 2px solid rgba(0,0,0,0.7);
    transform: scale(1.1,1.1);
  }
  
  &:focus{
  outline: none;
  }
`;

export const InputWrapper = styled.div`
text-align: center;
`;
