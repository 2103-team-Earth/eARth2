//action constants
export const UNSET = 'UNSET';
export const LOGIN_TYPE = 'LG';
export const PROFILE_TYPE = 'PROF';
export const EXPLORE_TYPE = 'EX';
export const AR_NAVIGATOR_TYPE = 'AR NAV';
export const AUTO_AR = 'AUTO AR';
export const AR_PLANE_SELECTOR = 'AR PLANE SELECTOR';
export const AR_IMAGE_MARKER = 'AR IMAGE MARKER';

//action creator
export const setNavigation = (type) => {
  return {
    type: type,
  };
};

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
