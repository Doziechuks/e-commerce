import shopActionType from "./shopType";

import { db, convertCollectionSnapshotToMap } from "../../firebase/firebaseUtils";
import { collection, onSnapshot } from "firebase/firestore";

export const setCollectionStart = () => ({
  type: shopActionType.FETCH_COLLECTIONS_START
});
export const setCollectionSuccess = (collectionMap) => ({
  type: shopActionType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});
export const setCollectionError = (errorMessage) => ({
  type: shopActionType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = collection(db, 'collections');
    dispatch(setCollectionStart());

    try {
      onSnapshot(collectionRef,(snapShot) => {
        const collectionMap = convertCollectionSnapshotToMap(snapShot);
        dispatch(setCollectionSuccess(collectionMap))
      });
    } catch (error) {
      dispatch(setCollectionError(error.message))
    }
  }
}