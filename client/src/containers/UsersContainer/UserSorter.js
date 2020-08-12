import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {timeout} from "../../shared/util";
import {FancyFilterWrapper, FancyLabel, FancySelect} from "../ExamsContainer/exams.styled";
import {fetchUsers, sort} from "../../actions/userActions";

export function UserSorter(){
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchUsers());
    },[]);

    async function sortHandler(event) {
        dispatch(sort(users,event));
        await timeout(200);
        history.push("/users");
    }

    return(
        <FancyFilterWrapper>
            <FancyLabel>Filter</FancyLabel>
            <FancySelect name="filters" id="filters" defaultValue="" onChange={sortHandler}>
                <option disabled defaultValue=""> </option>
                <option value="userName asc">By User Name Ascending</option>
                <option value="userName des">By User Name Descending</option>
                <option value="email asc">By Email Ascending</option>
                <option value="email des">By Email Descending</option>
                <option value="uid asc">By User ID Ascending</option>
                <option value="uid des">By User ID Descending</option>
                <option value="role asc">By Role Ascending</option>
                <option value="role des">By Role Descending</option>
            </FancySelect>
        </FancyFilterWrapper>
    );
}
