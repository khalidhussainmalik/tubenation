import {
  LOGIN_FAIL,
  LOGIN_PROFILE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionType";

const initialState = {
  accessToken: sessionStorage.getItem('tubenation-accessToken') ? sessionStorage.getItem('tubenation-accessToken') : null,
  user: sessionStorage.getItem('tubenation-user') ? JSON.parse(sessionStorage.getItem('tubenation-user')) : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_PROFILE:
      return {
        ...prevState,
        user: payload,
      };
    case LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };

    default:
      return prevState;
  }
};
