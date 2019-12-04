import ShopActionTypes from './shop.type';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
  
});

export const fetchCollectionSucces = collectionMap => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCES,
  payload: collectionMap
})

export const fetchCollectionFailure =(errorMessage)=> ({
  type: ShopActionTypes.fetchCollectionFailure,
  payload: errorMessage
})

export const fetchCollectionStartAsync = ()=> {
  console.log("cooool")
  return dispatch => {
    const collectionRef = firestore.collection('collection');
    dispatch(fetchCollectionStart())
    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSucces(collectionMap));
    }).catch(error=> dispatch(fetchCollectionFailure(error)))
  }
}