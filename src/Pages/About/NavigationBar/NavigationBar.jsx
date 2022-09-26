import { useState } from "react";
import "./NavigationBar.css";
const NavigationBar = ({ isMuck, setIsMuck }) => {
  const handleSoundClick = () => {
    setIsMuck(!isMuck);
  };
  return (
    <div className="navigation-container">
      <div>HAJUNGWOO X SUPERNORMAL</div>
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
