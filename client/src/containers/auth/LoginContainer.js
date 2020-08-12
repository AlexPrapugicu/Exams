import Login from "../../components/Login";
import React from "react";
import {ContainerWrapper} from "../../components/Auth.styled";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../actions/userActions";
import {timeout} from "../../shared/util";

export default function LoginContainer() {
    const history = useHistory();
    const dispatch = useDispatch();

    let editedUser = useSelector(state => state.users.editedUser);

    async function handleSubmit (event) {
        event.preventDefault();

        if (editedUser.userName && editedUser.password) {
            dispatch(loginUser(editedUser.userName, editedUser.password));
            await timeout(200);
            history.push("/home");
            await timeout(1000);
            history.go(0);
        }
    }

    function handleChange(event) {
        const {name, value} = event.target;
        editedUser = {
            ...editedUser,
            [name]: value
        };
    }


    return (
        <ContainerWrapper>
            <Login handleChange={handleChange} handleSubmit={handleSubmit} editedUser={editedUser}/>
        </ContainerWrapper>
    );
}
