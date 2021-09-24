import React, {Component} from "react";
import './signIn.styles.scss';
import FormInput from "../formInput/formInput";
import CustomButton from "../customButton/customButton";
import {signInWithGoogle, auth} from "../../firebase/firebase.utils";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.state({
                email: '',
                password: ''
            });
        } catch (e) {
            console.log(e);
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}/>
                    <FormInput name='password'
                               type='password'
                               value={this.state.password}
                               required
                               label='Password'
                               handleChange={this.handleChange}/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
