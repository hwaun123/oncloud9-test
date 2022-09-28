import "./NavigationBar.css";
import titleImage from "../../Images/TitleImages/titleimage.png";
import { forwardRef } from "react";
const NavigationBar = forwardRef(
  ({ isMuck, setIsMuck, aboutRef, roadmapRef, teamRef, galleryRef }) => {
    const handleSoundClick = () => {
      setIsMuck(!isMuck);
    };
    const handleAboutClick = () => {
      console.log(aboutRef);
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handleRoadMapClick = () => {
      console.log(roadmapRef);
      roadmapRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handleTeamClick = () => {
      console.log(teamRef);
      teamRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handleGalleryClick = () => {
      console.log(galleryRef);
      galleryRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
      <div className="navigation-container">
        <div className="navigation-components">
          <img src={titleImage} className="title-image"></img>
          <div className="navigation-screens">
            <div
              className="navi-screen"
              onClick={() => {
                console.log(aboutRef);
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

        <button
          className={`sound-button ${!isMuck ? "notmuck" : ""}`}
          onClick={handleSoundClick}
        ></button>
      </div>
    );
  }
);
// const NavigationBar = forwardRef({ isMuck, setIsMuck }) => {

// };

export default NavigationBar;
