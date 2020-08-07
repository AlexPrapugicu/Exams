import styled from "styled-components"

export const UserListStyled = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  border: 1px solid black;
`;

export const SearchBarWrapper = styled.div`
text-align: center;
display: flex;
flex-direction: column;
border: 1px solid black;
`;

export const SearchWrapper = styled.div`
display: block;
text-align: center;
`;

export const CustomSearchInput = styled.input`
    text-align: center;
    color: rebeccapurple;
    border-radius: 35px;
    border:2px solid rgba(0,0,0,0.5);
    transition: 0.4s;
    font-size: 1vw;
`;

