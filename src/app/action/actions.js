import * as api from "../api";

export const getUniDetails = () => async (dispatch) => {
  try {
    const data = await api.fetchdata();
    dispatch({ type: "FETCH", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const filterDetails = (data) => async (dispatch) => {
  try {
    console.log(data);
    dispatch({ type: "FILTER", payload: data });
  } catch (error) {
    console.log(error);
  }
};
