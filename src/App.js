import React, {useEffect, lazy, Suspense} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/header/header";
import {useDispatch, useSelector} from "react-redux";
import {checkUserSession} from "./redux/user/userActions";
import {selectCurrentUser} from "./redux/user/user.selector";
import Spinner from "./components/withSpinner/spinner.component";
import ErrorBoundary from "./components/errorBoundary/errorBoundary.component";

const HomePage = lazy(() => import('./pages/homepage/Homepage'));
const ShopPage = lazy(() => import ('./pages/shop/shopPage'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));
const SignInSignUp = lazy(() => import('./pages/signIn&SignUp/signIn&SignUp'));

const App = () => {
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <div>
            <Header/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner/>}>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/shop' component={ShopPage}/>
                        <Route exact path='/sign-in' render={() => user ? <Redirect/> : <SignInSignUp/>}/>
                        <Route exact path='/checkout' component={CheckoutPage}/>
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
}

export default App;
