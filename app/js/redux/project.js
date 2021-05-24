//action constants
export const SET_PROJECT = "SET_PROJECT";

//action creator
export const setProject = (project) => ({
  type: SET_PROJECT,
  project,
});

//initial State
const initialState = {
  project: {},
};

//reducer
export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT:
      return action.project;
    default:
      return state;
  }
}
