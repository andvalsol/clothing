import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
            return {
                ...currentState,
                currentUser: action.payload,
                error: null // Clear any error that might be hanging there
            };
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...currentState,
                error: action.payload
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...currentState,
                currentUser: null,
                error: null
            };
        default:
            return currentState;
    }
}

export default userReducer;
