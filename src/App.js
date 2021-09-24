import React, {Component} from "react";
import './App.css'
import {Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/shopPage";
import Header from "./components/header/header";
import SignInSignUp from "./pages/signIn&SignUp/signIn&SignUp";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/userActions";
import CheckoutPage from "./pages/checkout/checkout";
import {selectCollectionsForPreview} from "./redux/shop/shop.selectors";

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (!user) return;

            const userRef = await createUserProfileDocument(user);

            userRef.onSnapshot((snapshot => {
                this.props.setCurrentUser({
                    id: snapshot.id,
                    ...snapshot.data()
                })
            }));
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className='body'>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/sign-in' render={() => this.props.user ? <Redirect/> : <SignInSignUp/>}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: setCurrentUser(state),
    collectionsArray: selectCollectionsForPreview(state)
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
