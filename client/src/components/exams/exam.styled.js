import styled from "styled-components";
import {Link} from "react-router-dom"


export const ExamCardStyled = styled(Link)`
    flex: 1 0 calc(21% - 2px);
    background: linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,243,190,0.7) 46%, rgba(255,227,107,0.7) 100%);
    border-radius: 10px;
    box-shadow: 0 8px 6px -6px rgb(75, 75, 75);
    margin: 10px 20px;
    padding: 5px 7px;
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
    margin: 3.5px 0px;
    padding: 2px 0px;
`;
