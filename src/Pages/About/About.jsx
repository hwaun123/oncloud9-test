import Video from "./Video/Video";
import Main from "./Content/Main";
import { FullPage, Slide } from "react-full-page";
import RoadMap from "./RoadMap/RoadMap";
import { useState } from "react";
import Team1 from "./Team/Team1";
import Team2 from "./Team/Team2";

const About = () => {
  const [isScrollMain, setIsScrollMain] = useState(false);
  const [isScrollTeam1, setIsScrollTeam1] = useState(false);
  const [isScrollTeam2, setIsScrollTeam2] = useState(false);

  return (
    <>
      <FullPage
        afterChange={({ to }) => {
          if (to === 1) {
            setIsScrollMain(true);
          }
          if (to === 3) {
            setIsScrollTeam1(true);
          } else {
            setIsScrollTeam1(false);
          }
          if (to === 4) {
            setIsScrollTeam2(true);
          } else {
            setIsScrollTeam2(false);
          }
        }}
        duration={1000}
      >
        <Slide>
          <Video />
        </Slide>
        <Slide>
          <Main isScroll={isScrollMain} />
        </Slide>
        <Slide>
          <RoadMap />
        </Slide>
        <Slide>
          <Team1 isScroll={isScrollTeam1} />
        </Slide>
        <Slide>
          <Team2 isScroll={isScrollTeam2} />
        </Slide>
      </FullPage>
    </>
  );
};
export default About;
