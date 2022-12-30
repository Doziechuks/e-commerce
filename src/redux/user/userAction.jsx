import { userActionType } from "./userType";

export const handleUserAction = (user) => ({
  type: userActionType.SET_CURRENT_USER,
  payload: user
});