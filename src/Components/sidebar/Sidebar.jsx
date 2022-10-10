import React from 'react'
import './sidebar.scss'
import { logo } from "../../assets";
import SidebarButton from './SidebarButton';
import {GrHomeRounded} from 'react-icons/gr'

const Sidebar = () => {
  return (
    <div className='sidebar__container'>
      <div className="sidebar__logo">
        <img src={logo} alt="" />
      </div>
      <div>
        <SidebarButton to='/' icons={<GrHomeRounded /> }/>
      </div>
    </div>
  )
}

export default Sidebar
