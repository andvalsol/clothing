import {createSelector} from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collection
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => (collections)
        ? Object.keys(collections).map((key) => collections[key])
        : []
)

export const selectCollection = (collectionUrlParameter) => createSelector(
    [selectCollections],
    (collections) => (collections) ? collections[collectionUrlParameter] : null
);

export const selectIsSelectionFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections
)
