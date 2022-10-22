import React, { useState } from "react";
import { SearchNormal1 } from "iconsax-react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { logo } from "../../assets";
import SidebarButton from "../sidebar/SidebarButton";
import {
  MusicLibrary2,
  VideoVertical,
  Profile,
  LogoutCurve,
  Radio,
  Home2,
} from "iconsax-react";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="navbar">
        {/* logo  */}
        <div className="sidebar__logo">
          {toggle ? (
            <HiOutlineMenuAlt4
              className="menu"
              onClick={() => setToggle(false)}
            />
          ) : (
            <AiOutlineClose className="menu" onClick={() => setToggle(true)} />
          )}

          <img src={logo} alt="" />
        </div>
        <div className="input__container">
          <input type="search" placeholder="search artiste" />
          <SearchNormal1
            size="15"
            color="#dce775"
            variant="Outline"
            className="searchicon"
          />
        </div>
        {!toggle && (
          <div className="sidebar__container nav__container">
            {/* the navigation pane and routes */}
            
              <SidebarButton
                to="/"
                icons={<Home2 size="20" variant="Bold" />}
              />
              <SidebarButton
                to="/collections"
                icons={<MusicLibrary2 size="20" variant="Bold" />}
              />
              <SidebarButton icons={<Radio size="20" variant="Bold" />} />
              <SidebarButton
                to="/trending"
                icons={<VideoVertical size="20" variant="Bold" />}
              />
              <SidebarButton
                to="/."
                icons={<Profile size="20" variant="Bold" />}
              />
              <SidebarButton
                to="/."
                icons={<LogoutCurve size="20" variant="Bold" />}
              />
            
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
