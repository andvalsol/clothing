import React, {Component} from "react";
import './signIn.styles.scss';
import FormInput from "../formInput/formInput";
import CustomButton from "../customButton/customButton";
import {connect} from "react-redux";
import {onGoogleSignInStart, onEmailSignInStart} from "../../redux/user/user.saga";

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);
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
                        <CustomButton
                            type='button'
                            onClick={this.props.googleSignInStart}
                            isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(onGoogleSignInStart()),
    emailSignInStart: (email, password) => dispatch(onEmailSignInStart(email, password))
})

export default connect(null, mapDispatchToProps)(SignIn);
