import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUniDetails } from "./app/action/actions";
import Navbar from "./Components/Navbar/Navbar";
import Console from "./Components/Console/Console";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUniDetails("India"));
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      {/* {console.log(uniDetails)} */}
      <Console />
    </div>
  );
}

export default App;
