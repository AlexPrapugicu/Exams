import React from "react";
import {
    AuthText, ButtonWrapper,
    FancyButton,
    FancyForm,
    FancyInput,
    FancyLink,
    InnerWrapper,
    InputWrapper,
    Wrapper
} from "./Auth.styled";

function Register({handleSubmit, handleChange}) {
    return (
        <Wrapper REGISTER>
            <InnerWrapper>
                <AuthText HEADER>Registration</AuthText>
                <AuthText>Let's get you started</AuthText>
                <FancyForm onSubmit={handleSubmit}>
                    <InputWrapper>
                        <AuthText>Username</AuthText>
                        <FancyInput type="text"
                                    placeholder="Username"
                                    name="userName"
                                    style={{textAlign: "center"}}
                                    onChange={handleChange}/>
                    </InputWrapper>
                    <InputWrapper>
                        <AuthText>Password</AuthText>
                        <FancyInput type="password"
                                    placeholder="Password"
                                    name="password"
                                    style={{textAlign: "center"}}
                                    onChange={handleChange}/>
                    </InputWrapper>
                    <InputWrapper>
                        <AuthText>Email</AuthText>
                        <FancyInput type="text"
                                    placeholder="Email"
                                    name="email"
                                    style={{textAlign: "center"}}
                                    onChange={handleChange}/>
                    </InputWrapper>
                    <ButtonWrapper>
                        <FancyButton type="submit">
                            <AuthText BUTTON>Register</AuthText>
                        </FancyButton>
                    </ButtonWrapper>
                </FancyForm>
                <AuthText>Already have an account? : <FancyLink to={"/login"}>Sign In</FancyLink></AuthText>
            </InnerWrapper>
        </Wrapper>
    );
}

export default Register;
