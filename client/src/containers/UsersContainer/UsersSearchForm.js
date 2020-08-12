import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CustomSearchInput, SearchWrapper} from "./UserList.styled";
import {fetchUsers, filter} from "../../actions/userActions";


function UsersSearchForm() {

    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUsers());
    }, []);


    function inputChangeHandler(event){
        dispatch(filter(users,event));
    }

    return (
        <SearchWrapper>
            <CustomSearchInput
                type="text"
                className="searchInput"
                required={true}
                name="userName"
                placeholder="Ex: Alex"
                onChange={inputChangeHandler}/>
        </SearchWrapper>
    );
}

export default UsersSearchForm;
