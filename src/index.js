import React from "react";
import ReactDOM from "react-dom";
import LeftNav from "./components/LeftNav";
import "./styles.css";

/*Optional props are icons and minimized 
  (for a collapsed state. minimized without icons hides menu)*/

ReactDOM.render(<LeftNav icons />, document.getElementById("root"));
