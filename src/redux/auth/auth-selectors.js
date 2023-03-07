export const selectUser = (state) => state.userData.user; // user = {username, email}
export const selectIsLoggedIn = (state) => state.userData.isLoggedIn;
export const selectStatus = (state) => state.userData.status;
export const selectUserError = (state) => state.userData.error;
