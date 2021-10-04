import React, {useState} from "react";
import './signIn.styles.scss';
import FormInput from "../formInput/formInput";
import CustomButton from "../customButton/customButton";
import {connect} from "react-redux";
import {onGoogleSignInStart, onEmailSignInStart} from "../../redux/user/user.saga";

const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''})

    const {email, password} = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        emailSignInStart(email, password);
    }

    const handleChange = (event) => {
        const {value, name} = event.target;

        setCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    required
                    handleChange={handleChange}/>
                <FormInput name='password'
                           type='password'
                           value={password}
                           required
                           label='Password'
                           handleChange={handleChange}/>
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton
                        type='button'
                        onClick={googleSignInStart}
                        isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(onGoogleSignInStart()),
    emailSignInStart: (email, password) => dispatch(onEmailSignInStart(email, password))
})

export default connect(null, mapDispatchToProps)(SignIn);
