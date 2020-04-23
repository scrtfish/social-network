import React from "react";
import s from "../Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/1" + props.id;
  return (
    <div className={(s.dialog, s.active)}>
      <NavLink className={s.test} to={path}>
        <img className={s.dialogAvatar} src={props.img} />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
