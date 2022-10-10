import React from "react";
import "./sidebar.scss";
import {SearchNormal1} from "iconsax-react"
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
      <div className="input__container">
      <input type="search" placeholder="search artiste" />
      <SearchNormal1 size="15" color="#dce775" variant="Outline" className="searchicon"/>
      </div>
      {/* the navigation pane and routes */}
      <div className="sidebar__btn">
        <SidebarButton to="/" icons={<Home2 size="20" variant="Bold" />} />
        <SidebarButton
          to="/collections"
          icons={<MusicLibrary2 size="20" variant="Bold" />}
        />
        <SidebarButton
          to="/player"
          icons={<Radio size="20" variant="Bold" />}
        />
        <SidebarButton
          to="/trending"
          icons={<VideoVertical size="20" variant="Bold" />}
        />
      </div>

      {/* the user profile and logout b/tn */}
      <div className="sidebar__profile">
        <SidebarButton to="/." icons={<Profile size="20" variant="Bold" />} />
        <SidebarButton
          to="/."
          icons={<LogoutCurve size="20" variant="Bold" />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
