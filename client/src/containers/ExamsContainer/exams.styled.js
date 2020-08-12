import styled from "styled-components";

export const ExamsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5%;
`;

export const Wrapper = styled.div`
  text-align: center;
`;


export const SearchBarWrapper = styled.div`
margin: 2%;
text-align: center;
display: flex;
flex-direction: column;
`;

export const ExamContainerWrapper = styled.div`
margin: 0;
padding: 0;
position: absolute;
background-image: url("https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80");
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
height: 100vh;
width: 100%;

`;


export const SearchWrapper = styled.div`
display: block;
text-align: center;
`;

export const CustomSearchInput = styled.input`
    width: 25%;
    height: 30px;
    text-align: center;
    color: rebeccapurple;
    border-radius: 35px;
    border:2px solid rgba(0,0,0,0.5);
    transition: 0.4s;
    font-size: 1.2vw;
`;

export const ExamText = styled.h1`
font-size: 1.2em;
color: white;

`;


export const FancySelectWrapper = styled.div`
margin: 2%;
`;

export const FancyFilterWrapper = styled.div`
text-align: center;
`;

export const FancyLabel = styled.label`
margin: 1%;
font-size: 1.3em;
font-weight: bold;
color: white;
`;

export const FancySelect = styled.select`
border: none;
width: 15%;
height: 25px;
border-radius: 10px;
font-size: 1.2em;
`;
