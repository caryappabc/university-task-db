/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "FILTER":
      return;
    default:
      return state.filter((uni) => uni.name === action.payload);
  }
};
