import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../shared/Spinner";
import {fetchUsers} from "../../actions/userActions";
import UserCard from "../../components/users/UserCard";
import {SearchBarWrapper, UserContainer, UserListStyled} from "./UserList.styled";
import UsersSearchForm from "./UsersSearchForm";

function Exams() {

    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    // Use effect will only run once with component render
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <UserContainer>
            <SearchBarWrapper>
                <UsersSearchForm/>
                <p>filter by</p>
            </SearchBarWrapper>
        <UserListStyled>
            {users ? users.map(user => <UserCard
                key={user.uid}
                id={user.uid}
                username={user.userName}
                password={user.password}
                email={user.email}
                role={user.role}/>) : <Spinner/>}
        </UserListStyled>
        </UserContainer>
    );
}

export default Exams;
