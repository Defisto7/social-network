import React from 'react';
import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css';

function DialogItem({name, id, avatar}) {
  return (
    <div>
      <div className={s.dialog}>
        <div className={s.text}>
          <img className={s.img} src={avatar} alt="" />
          <NavLink to={"/dialogs/" + id} className={(navData) => (navData.isActive ? s.active : s.item)}>
            {name}
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default DialogItem