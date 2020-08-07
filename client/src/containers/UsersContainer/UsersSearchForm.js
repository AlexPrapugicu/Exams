import React from "react";
import {useSelector} from "react-redux";
import {CustomSearchInput, SearchWrapper} from "./UserList.styled";


function UsersSearchForm() {

    const users = useSelector(state => state.users.users);

    return (
        <SearchWrapper>
            <CustomSearchInput
                className="searchInput"
                required={true}
                onChange={e => console.log(users, e.target.value)}
                placeholder="Search users"/>
        </SearchWrapper>
    );
}

export default UsersSearchForm;
