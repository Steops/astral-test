interface IAuth {
  auth: boolean;
}
export enum AuthActionTypes {
  SET_AUTH = 'SET_AUTH',
}
const defaultState: IAuth = {
  auth: false,
};

export interface AuthAction {
  type: AuthActionTypes.SET_AUTH;
  payload: boolean;
}
export const authReducer = (state = defaultState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH:
      return {
        auth: action.payload,
      };
    default:
      return state;
  }
};

export const setAuth = (auth: boolean) => ({
  type: AuthActionTypes.SET_AUTH,
  payload: auth,
});
