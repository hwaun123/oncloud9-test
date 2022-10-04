import "./NavigationBar.css";
import titleImage from "../../Images/TitleImages/titleimage.png";
import { forwardRef } from "react";
import onVolum from "../../Images/on_volum.gif";
import offVolum from "../../Images/off_volum.gif";
const NavigationBar = forwardRef(
  ({ isMuck, setIsMuck, aboutRef, roadmapRef, teamRef, galleryRef }) => {
    const handleSoundClick = () => {
      setIsMuck(!isMuck);
    };
    const handleAboutClick = () => {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handleRoadMapClick = () => {
      roadmapRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handleTeamClick = () => {
      teamRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handleGalleryClick = () => {
      galleryRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
      <div className="navigation-container">
        <div className="navigation-components">
          <div className="navigation-nav">
            <img src={titleImage} className="title-image"></img>
            <div className="navigation-screens">
              <div
                className="navi-screen"
                onClick={() => {
                  handleAboutClick();
                }}
              >
                ABOUT
              </div>
              <div className="navi-screen" onClick={handleRoadMapClick}>
                ROADMAP
              </div>
              <div className="navi-screen" onClick={handleTeamClick}>
                TEAM
              </div>
              <div className="navi-screen" onClick={handleGalleryClick}>
                GALLERY
              </div>
            </div>
          </div>
          <div className="navigation-setting">
            <button
              className={`navigation-setting-volum ${!isMuck ? "notmuck" : ""}`}
              onClick={handleSoundClick}
            >
              {isMuck ? (
                <img src={offVolum} alt="" />
              ) : (
                <img src={onVolum} alt="" />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
);
// const NavigationBar = forwardRef({ isMuck, setIsMuck }) => {

// };

export default NavigationBar;
