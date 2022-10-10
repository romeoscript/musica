import React from "react";
import { Link } from "react-router-dom";

const SidebarButton = (props) => {
  return (
    <Link to={props.to}>
      <div> {props.icons}</div>
    </Link>
  );
};

export default SidebarButton;
