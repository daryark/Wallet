export const selectTheme = state => state.globalData.themeTitle;
export const selectIsLoading = state => state.globalData.isLoading;
export const selectError = state => state.globalData.error;
export const selectIsModalOpen = state => state.globalData.isModalOpen;
export const selectIsModalTeamOpen = state => state.globalData.isModalTeamOpen;
export const selectIsEditModalOpen = state => state.globalData.isEditModalOpen;
export const selectIsLogoutModalOpen = state =>
  state.globalData.isLogoutModalOpen;
export const selectIsMobileMenuModalOpen = state =>
  state.globalData.isMobileMenuModalOpen;
export const selectModalAddTransactionOpen = state =>
  state.globalData.isMobileMenuModalOpen;

export const selectLanguage = state => state.globalData.language;
