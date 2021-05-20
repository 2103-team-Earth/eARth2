//action constants -> really not sure we actually need these
export const UNSET = "UNSET";
export const LOGIN_TYPE = "LG";
export const PROFILE_TYPE = "PROF";
export const EXPLORE_TYPE = "EX";
export const AR_NAVIGATOR_TYPE = "AR";
export const AUTO_AR = "AUTO AR";
export const AR_PLANE_SELECTOR = "AR PLANE SELECTOR";
export const AR_IMAGE_MARKER = "AR IMAGE MARKER";

//action creators
export const setNavigation = (type) => {
  return {
    type: type,
  };
};
// export const experienceSelector = () => {
//   return {
//     type: UNSET,
//   };
// };

// export const getLogin = () => {
//   return {
//     type: LOGIN_TYPE,
//   };
// };

// export const getExplore = () => {
//   return {
//     type: EXPLORE_TYPE,
//   };
// };

// export const getProfile = () => {
//   return {
//     type: PROFILE_TYPE,
//   };
// };

// export const ARSelector = () => {
//   return {
//     type: AR_NAVIGATOR_TYPE,
//   };
// };

// export const autoAR = () => {
//   return {
//     type: AUTO_AR,
//   };
// };

// export const ARPlaneSelctor = () => {
//   return {
//     type: AR_PLANE_SELECTOR,
//   };
// };

// export const ARImageMarker = () => {
//   return {
//     type: AR_IMAGE_MARKER,
//   };
// };

//initial State
const initialState = {
  navigationType: UNSET,
};

//reducer
export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case action.type:
      return { ...state, navigationType: action.type };
    default:
      return state;
  }
}
