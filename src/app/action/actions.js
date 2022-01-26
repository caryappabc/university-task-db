import * as api from "../api";

export const getUniDetails = () => async (dispatch) => {
  try {
    const { data } = await api.fetchdata();
    dispatch({ type: "FETCH", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const filterDetails = (text) => async (dispatch) => {
  try {
    const { data } = await api.fetchdata();
    let filteredData = data.filter((uni) =>
      uni.name.toLowerCase().includes(text.toLowerCase())
    );
    dispatch({ type: "FILTER", payload: filteredData });
  } catch (error) {
    console.log(error);
  }
};
