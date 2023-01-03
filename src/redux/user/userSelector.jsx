import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
export const selectIsLoading = createSelector(
  [selectUser],
  loading => loading.isLoading
);
export const selectErrorMessage = createSelector(
  [selectUser],
  (error) => error.errorMessage
);