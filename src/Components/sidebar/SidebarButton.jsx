import React from "react";
import { Link ,useLocation} from "react-router-dom";
import './sidebar.scss'
const SidebarButton = (props) => {
  const location = useLocation()
  const isActive = location.pathname === props.to
  const btnClass = isActive? 'sidebarbutton active': 'sidebarbutton'
  return (
    <Link to={props.to}>
      <div className={btnClass}> {props.icons}</div>
    </Link>
  );
};

export default SidebarButton;
