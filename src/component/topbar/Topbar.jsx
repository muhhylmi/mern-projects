import React, { useState } from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Settings,
  Language,
  Logout,
} from "@mui/icons-material/";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/apiCalls";
import { useHistory } from "react-router-dom";

export default function Topbar() {
  const history = useHistory();
  const [userSettingClass, setUserSettingClass] = useState("");
  const handleClick = () => {
    if (userSettingClass !== "") {
      setUserSettingClass("");
    } else {
      setUserSettingClass(" show-user-setting");
    }
  };
  const dispatch = useDispatch();

  const hadleLogout = () => {
    logout(dispatch);
    history.push("/login");
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ReactAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
            onClick={handleClick}
          />
          <div className={`user-setting ${userSettingClass}`}>
            <span className="logout" onClick={hadleLogout}>
              <Logout /> logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
