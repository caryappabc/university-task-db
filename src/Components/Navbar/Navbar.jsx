import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterDetails } from "../../app/action/actions";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();

  let dispatchfilter = (e) => dispatch(filterDetails(e));
  return (
    <nav className="navbar">
      <h1>UNISearch</h1>
      <input type="text" onChange={(e) => dispatchfilter(e.target.value)} />
    </nav>
  );
}

export default Navbar;
