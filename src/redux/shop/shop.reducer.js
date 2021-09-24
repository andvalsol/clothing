import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    collection: null
}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collection: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;
