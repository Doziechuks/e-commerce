import shopActionType from "./shopType"

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: null
};

const shopReducer = (state = initialState, action) => {
  switch(action.type){
    case shopActionType.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case shopActionType.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case shopActionType.FETCH_COLLECTIONS_FAILURE:
      return{
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer;