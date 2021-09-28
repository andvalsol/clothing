import {takeLatest, put, all, call} from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {auth, createUserProfileDocument, getCurrentUser, googleAuthProvider} from "../../firebase/firebase.utils";
import {signInSuccess, signInFailure, signOutSuccess, signOutFailure} from "./userActions";

function* googleSignIn() {
    try {
        const {user} = yield auth.signInWithPopup(googleAuthProvider);

        getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

function* emailSignIn({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);

        getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

function* getSnapshotFromUserAuth(user) {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();

    yield put(signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
    }));
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();

        if (!userAuth) return;

        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

function* signOut() {
    try {
        yield auth.signOut;

        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOut)
    ])
}
