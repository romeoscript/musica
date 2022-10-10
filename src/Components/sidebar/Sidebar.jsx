import React from "react";
import "./sidebar.scss";
import { logo } from "../../assets";
import {
  MusicLibrary2,
  VideoVertical,
  Profile,
  LogoutCurve,
  Radio,
  Home2,
} from "iconsax-react";

import SidebarButton from "./SidebarButton";
// import {GrHomeRounded} from 'react-icons/gr'

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      {/* logo  */}
      <div className="sidebar__logo">
        <img src={logo} alt="" />
      </div>

      {/* the navigation pane and routes */}
      <div className="sidebar__btn">
        <SidebarButton
          to="/"
          icons={
            <Home2
              size="30"
              variant="Bold"
            />
          }
        />
        <SidebarButton
          to="/collections"
          icons={
            <MusicLibrary2
              size="30"
              variant="Bold"
            />
          }
        />
        <SidebarButton
          to="/player"
          icons={
            <Radio
              size="30"
              variant="Bold"
            />
          }
        />
        <SidebarButton
          to="/trending"
          icons={
            <VideoVertical
              size="30"
              variant="Bold"
            />
          }
        />
      </div>

      {/* the user profile and logout b/tn */}
      <div className="sidebar__profile">
        <SidebarButton
          to="/."
          icons={
            <Profile
              size="30"
              variant="Bold"
            />
          }
        />
        <SidebarButton
          to="/."
          icons={
            <LogoutCurve
              size="30"
              variant="Bold"
            />
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
