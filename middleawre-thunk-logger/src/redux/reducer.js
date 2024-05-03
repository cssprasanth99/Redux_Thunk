import { FETCH_FAILURE, FETCH_SUCCESS } from "./actionTypes";

let initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, isLoading: true, data: action.payload };
    case FETCH_FAILURE:
      return { ...state, isError: true, data: action.payload };
    default:
      return state;
  }
}
