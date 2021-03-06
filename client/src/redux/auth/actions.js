export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER", payload: user
  }
}

const authActons = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  login: () => ({
    type: authActons.LOGIN_REQUEST,
  }),
  logout: () => ({
    type: authActons.LOGOUT,
  }),
};
export default authActons;


