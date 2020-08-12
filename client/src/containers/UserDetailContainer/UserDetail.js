import React, {useEffect} from "react";
import {useParams, useHistory} from "react-router-dom"
import UserDetailCard from "../../components/users/UserDetailCard";
import {useDispatch, useSelector} from "react-redux";
import {startEditing, fetchUser, stopEditing, deleteUser} from "../../actions/userActions";
import Spinner from "../../shared/Spinner";
import UserDetailEdit from "../../components/users/UserDetailEdit";
import {UserDetailWrapper} from "./UserDetailWrapper";
import {getUserRole} from "../../shared/util";


function UserDetail() {

    const history = useHistory();
    const {username} = useParams();

    const user = useSelector(state => state.users.user);

    const editMode = useSelector(state => state.users.editMode);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(username));
    }, []);


    function startEditingHandler() {
        dispatch(startEditing());
    }

    function stopEditingHandler() {
        dispatch(stopEditing());
    }

    function deleteUserHandler() {
        dispatch(deleteUser(user));
        history.goBack();
    }

    return (
        <UserDetailWrapper>
            {
                !editMode ?
                    user ? <UserDetailCard username={username}
                                           user={user}
                                           startEdit={startEditingHandler}
                                           userRole={getUserRole}/>
                        : <Spinner/>
                    : user ? <UserDetailEdit username={username}
                                             user={user}
                                             stopEdit={stopEditingHandler}
                                             deleteUser={deleteUserHandler}
                                             userRole={getUserRole}/>
                    : <Spinner/>
            }
        </UserDetailWrapper>
    );
}

export default UserDetail;
