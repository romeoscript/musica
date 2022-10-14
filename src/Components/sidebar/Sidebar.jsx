import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import { SearchNormal1 } from "iconsax-react";
import { logo } from "../../assets";
import {
  MusicLibrary2,
  VideoVertical,
  Profile,
  LogoutCurve,
  Radio,
  Home2,
} from "iconsax-react";
import { fetchData, musicOptions } from "../../utilities/fetchData";
import SidebarButton from "./SidebarButton";
// import {GrHomeRounded} from 'react-icons/gr'

const Sidebar = () => {
  // the state for the search bar
  const [search, setSearch] = useState("");
  const handleSearch = async (e) => {
    setSearch(e.target.value.toLowerCase());
    if (search) {
      const musicData = await fetchData(
        'https://shazam-core.p.rapidapi.com/v1/charts/world',
        musicOptions
      );
      console.log(musicData[0].images.coverart)
      const searchedMusic = musicData.filter((music)=>{
        return music.artiste
      })
    }
  };
  // end of the state
  return (
    <div className="sidebar__container">
      {/* logo  */}
      <div className="sidebar__logo">
        <img src={logo} alt="" />
      </div>
      <div className="input__container">
        <input
          type="search"
          placeholder="search artiste"
          value={search}
          onChange={handleSearch}
        />
        <SearchNormal1
          size="15"
          color="#dce775"
          variant="Outline"
          className="searchicon"
        />
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
