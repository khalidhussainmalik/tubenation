import firebase from "firebase/compat/app";

import auth from "../../firebase";
import {
  LOGIN_FAIL,
  LOGIN_PROFILE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    // console.log(res);

    const accessToken = res.credential.accessToken;

    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem('tubenation-accessToken', accessToken)
    sessionStorage.setItem('tubenation-user', JSON.stringify(profile))

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOGIN_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut()
  dispatch({
    type: LOG_OUT,
  })

  sessionStorage.removeItem('tubenation-accessToken')
  sessionStorage.removeItem('tubenation-user')
}
