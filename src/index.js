import React from "react";
import ReactDOM from "react-dom";
// import heading component
import Heading from "./Heading";
import UnOrderedList from "./UnOrderedList";

ReactDOM.render(
  <div>
    {/* usage the heading component */}
    <Heading />
    <UnOrderedList />
  </div>,
  document.getElementById("root")
);
