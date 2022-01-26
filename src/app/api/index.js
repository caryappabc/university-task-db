import axios from "axios";

export const fetchdata = () =>
  axios.get("http://universities.hipolabs.com/search?country=United+States");
