import { takeLatest, call,put, all } from 'redux-saga/effects';

import ShopActionTypes from './shop.type';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import { fetchCollectionSucces, fetchCollectionFailure } from './shop.action';

export function* fetchCollectionsAsync() {
  yield console.log('I am fired');
  try {

    const collectionRef = firestore.collection('collection');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSucces(collectionMap));
  } catch(error) {
    yield put(fetchCollectionFailure(error.message));
    
  }
}

// collectionRef
//   .get()
//   .then(snapshot => {
//     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
//     dispatch(fetchCollectionSucces(collectionMap));
//   })
//   .catch(error => dispatch(fetchCollectionFailure(error)));

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}