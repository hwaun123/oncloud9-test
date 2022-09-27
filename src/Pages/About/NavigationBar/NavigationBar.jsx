import { useState } from "react";
import "./NavigationBar.css";
import titleImage from "../../../Images/TitleImages/titleimage.png";
const NavigationBar = ({ isMuck, setIsMuck }) => {
  const handleSoundClick = () => {
    setIsMuck(!isMuck);
  };
  return (
    <div className="navigation-container">
      <img src={titleImage} className="title-image"></img>
      <div>ABOUT</div>
      <div>ROADMAP</div>
      <div>TEAM</div>
      <div>GALLERY</div>
      <button
        className={`sound-button ${!isMuck ? "notmuck" : ""}`}
        onClick={handleSoundClick}
      ></button>
    </div>
  );
};

export default NavigationBar;
