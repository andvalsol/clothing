import {takeLatest, call, put} from 'redux-saga/effects';
import ShopActionTypes from "./shop.types";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shop.actions";

function* fetchCollectionAsync() {
    try {
        const collectionsReference = firestore.collection('collections');

        const snapshot = yield collectionsReference.get();

        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);

        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}