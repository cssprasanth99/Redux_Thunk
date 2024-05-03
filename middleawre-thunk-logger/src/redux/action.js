import { FETCH_FAILURE, FETCH_SUCCESS } from "./actionTypes";

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`
      );
      const data = await res.json();
      console.log(data);
      dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_FAILURE, payload: error.message });
    }
  };
};
