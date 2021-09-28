import {takeLatest, call, put, all} from 'redux-saga/effects';
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

function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ]);
}
