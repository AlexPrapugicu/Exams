import {
    ButtonSection, DetailCardWrapper,
    DetailImageSection, FancyButton, FancyForm, FancyInput,
    ImgThumbnail,
    InfoDetailSection,
    InfoDetailWrapper, InputWrapper,
    UserInfoSection, UserText
} from "./styledCards";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../actions/userActions";

function UserDetailEdit({username, user, stopEdit, deleteUser}) {
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
                    <UserText>{username.toUpperCase()}</UserText>
                    <UserText>City Country</UserText>
                </UserInfoSection>
            </DetailImageSection>
            <FancyForm onSubmit={handleSubmit}>
                    <InfoDetailWrapper>
                        <InfoDetailSection>
                            <InputWrapper>
                            <UserText>Email</UserText>
                                <FancyInput type="text"
                                            defaultValue={user.email}
                                            name="email"
                                            style={{textAlign: "center"}}
                                            onChange={handleChange}/>
                            </InputWrapper>
                            <InputWrapper>
                            <UserText>Role</UserText>
                            <FancyInput type="text"
                                   defaultValue={user.role}
                                   name="role"
                                   style={{textAlign: "center"}}
                                   onChange={handleChange}/>
                            </InputWrapper>
                        </InfoDetailSection>
                        <InfoDetailSection>
                            <InputWrapper>
                                <UserText>Username</UserText>
                                <FancyInput type="text"
                                            defaultValue={user.userName}
                                            name="userName"
                                            style={{textAlign: "center"}}
                                            onChange={handleChange}/>
                            </InputWrapper>
                            <InputWrapper>
                                <UserText>Password</UserText>
                                <FancyInput type="password"
                                            defaultValue={user.password}
                                            name="password"
                                            style={{textAlign: "center"}}
                                            onChange={handleChange}/>
                            </InputWrapper>
                        </InfoDetailSection>
                    </InfoDetailWrapper>
            </FancyForm>
            <ButtonSection>
                <FancyButton type="button" onClick={() => stopEdit()}>STOP EDIT</FancyButton>
                <FancyButton onClick={deleteUser}>Delete User</FancyButton>
                <FancyButton onClick={() => console.log("edited")} type="submit">Done</FancyButton>
            </ButtonSection>
        </DetailCardWrapper>
    );
}

export default UserDetailEdit;
