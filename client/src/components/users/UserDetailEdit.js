import {
    ButtonSection, DetailCardWrapper,
    DetailImageSection,
    ImgThumbnail,
    InfoDetailSection,
    InfoDetailWrapper,
    UserInfoSection
} from "./styledCards";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../actions/userActions";

function UserDetailEdit({username, user, editMode, stopEdit, deleteUser}) {
    const dispatch = useDispatch();

    let editedUser = useSelector(state => state.users.editedUser);

    function handleSubmit(event) {
        event.preventDefault();

        if (editedUser.userName && editedUser.email && editedUser.password) {
            dispatch(updateUser(editedUser));
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
        <DetailCardWrapper>
            <DetailImageSection>
                <ImgThumbnail detail
                              src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
                              alt=""/>
                <UserInfoSection>
                    <p>{username}</p>
                    <p>City Country</p>
                </UserInfoSection>
            </DetailImageSection>
            <button type="button" onClick={() => stopEdit()}>STOP EDIT</button>
            {/*<button onClick={() => console.log(editMode)}>Check Edit</button>*/}
            {/*<button onClick={() => editedUser.role = "student"}>Set role</button>*/}
            {/*<button onClick={() => console.log(editedUser)}>Check EditedUser</button>*/}
            {/*<button onClick={() => console.log(user)}>Check User</button>*/}
            <button onClick={deleteUser}>Delete User</button>

            <form onSubmit={handleSubmit}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <InfoDetailWrapper>
                        <InfoDetailSection>
                            <label>Email</label>
                            <input type="text"
                                   defaultValue={user.email}
                                   name="email"
                                   style={{textAlign: "center"}}
                                   onChange={handleChange}/>
                            <label>Role</label>
                            <input type="text"
                                   defaultValue={user.role}
                                   name="role"
                                   style={{textAlign: "center"}}
                                   onChange={handleChange}/>
                        </InfoDetailSection>
                        <InfoDetailSection>
                            <label>Username</label>
                            <input type="text"
                                   defaultValue={user.userName}
                                   name="userName"
                                   style={{textAlign: "center"}}
                                   onChange={handleChange}/>
                            <label>Password</label>
                            <input type="text"
                                   defaultValue={user.password}
                                   name="password"
                                   style={{textAlign: "center"}}
                                   onChange={handleChange}/>
                        </InfoDetailSection>
                    </InfoDetailWrapper>
                    <button onClick={() => console.log("edited")} type="submit">Done</button>
                </div>
            </form>
            <ButtonSection>
                <button>Do somethong</button>
                <button>Do else</button>
                <button>Return</button>
            </ButtonSection>
        </DetailCardWrapper>
    );
}

export default UserDetailEdit;
