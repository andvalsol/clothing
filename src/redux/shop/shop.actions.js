import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => {
   return {
      type: ShopActionTypes.FETCH_COLLECTIONS_START
   }
};

export const fetchCollectionsSuccess = (collectionsMap) => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
   payload: collectionsMap
});

export const fetchCollectionsFailure = (error) => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
   error
});
