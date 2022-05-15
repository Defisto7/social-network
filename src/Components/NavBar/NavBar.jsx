import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className={s.navBar}>
      <div className={s.item}>
        <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item } >Messages</NavLink>
      </div>
      <div className={s.item}>News</div>
      <div className={s.item}>Music</div>
      <div className={s.item}>Settings</div>
    </div>
  )
}

export default NavBar