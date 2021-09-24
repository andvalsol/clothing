import React from "react";
import './signIn&SignUp.styles.scss';
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";

const SignInSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInSignUp;
