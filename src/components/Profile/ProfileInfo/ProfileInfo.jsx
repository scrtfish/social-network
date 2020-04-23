import React from "react";
import s from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
      </div>

      <div className={s.descriptionBlock}>ava + des</div>
    </div>
  );
};

export default ProfileInfo;
