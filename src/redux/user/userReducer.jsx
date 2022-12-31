import { userActionType } from "./userType";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case userActionType.IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case userActionType.SET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload
      };
    case userActionType.ERROR_MESSAGE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default: 
      return state;
  }
};

export default userReducer;