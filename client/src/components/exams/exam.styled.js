import styled from "styled-components";
import {Link} from "react-router-dom"


export const ExamCardStyled = styled(Link)`
    flex: 1 0 calc(21% - 2px);
    background: linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,243,190,0.7) 46%, rgba(255,227,107,0.7) 100%);
    border-radius: 10px;
    box-shadow: 0 8px 6px -6px rgb(75, 75, 75);
    margin: 10px 20px;
    padding: 3px 5px;
    width: 35%;
    color: black;
    text-decoration: none;
`;

export const ListStyled = styled.ul`
    list-style: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1em;
    padding: 0;
`;

export const ListItemStyled = styled.li`
    font-weight: ${props => props.important ? "bold" : "normal"};
    margin: 3.5px 5px;
    padding: 2px 0px;
`;

export const FancyEditForm = styled.form`
display: flex;
flex-direction: row;
margin: 1%;
`;


export const ExamDetailWrapper = styled.div`
position: absolute;
background-position: center center;
background-repeat: no-repeat;
background-size: cover;

width: 100%;
height: 100vh;
`;


export const ExamDetail = styled.div`
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,243,190,0.4) 56%, rgba(255,227,107,0.7) 100%);
    border-radius: 10px;
    box-shadow: 0 8px 6px -6px rgb(75, 75, 75);
    padding: 5px 7px;
    text-decoration: none;
    color: white;
    margin: 6%;
`;

export const ItemWrapper = styled.div`
margin: 2%;
`;

export const Separator = styled.div`
display: flex;
flex-direction: row;
`;


export const FancyInput = styled.input`
height: 20px;
  background-color: rgba(255,255,255,0.3);
  border: 2px solid rgba(0,0,0,0.5);
  border-radius: 10px;
  width: 100%;
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

export const FancyButton = styled.button`
  background-color: rgba(255,255,255,0.3);
border: 2px solid rgba(0,0,0,0.5);
  border-radius: 10px;
  width: ${props => props.submit ? "100%" : "20%"};
  margin: 1%;
    transition: 0.5s;
  font-size: 1.2em;
  cursor: pointer;

  &:hover{
    background-color: rgba(255,255,255,0.6);
    border: 2px solid rgba(0,0,0,0.7);
    transform: scale(1.1,1.1);
  }
`;
