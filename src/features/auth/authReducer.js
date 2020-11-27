const { SIGN_OUT_USER, SIGN_IN_USER } = require("./authConstants");

const initialState = {
  authenticated: true,
  currentUser: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          uid: payload.uid,
          displayName: payload.displayName,
          email: payload.email,
          photoURL: payload.photoURL,
          providerId: payload.providerData[0].providerId,
        },
      };

    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default authReducer;
