import { userActionType } from "./userType";

export const handleUserAction = (user) => ({
  type: userActionType.SET_CURRENT_USER,
  payload: user
});

export const handleIsLoadingAction = () => ({
  type: userActionType.IS_LOADING
});
export const handleErrorMessageAction = (errorMessage) => ({
  type: userActionType.ERROR_MESSAGE,
  payload: errorMessage
});