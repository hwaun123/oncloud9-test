import Video from "./Video/Video";
import Main from "./Content/Main";
import ReactFullpage from "@fullpage/react-fullpage";
import { forwardRef } from "react";
const About = ({ isMuck, aboutRef, roadmapRef, teamRef, galleryRef }) => {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Video isMuck={isMuck} />
            </div>
            s
            <div className="section">
              <Main
                aboutRef={aboutRef}
                roadmapRef={roadmapRef}
                teamRef={teamRef}
                galleryRef={galleryRef}
              />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
// const About = ({ isMuck }) => {

// return (
//   <>
//     <FullPage
//       afterChange={({ to }) => {
//         if (to === 1) {
//           setIsScrollMain(true);
//         }
//         if (to === 3) {
//           setIsScrollTeam1(true);
//         } else {
//           setIsScrollTeam1(false);
//         }
//         if (to === 4) {
//           setIsScrollTeam2(true);
//         } else {
//           setIsScrollTeam2(false);
//         }
//       }}
//       duration={1000}
//     >
//       <Slide>
//         <Video />
//       </Slide>
//       <Slide>
//         <Main isScroll={isScrollMain} />
//       </Slide>
//       <Slide>
//         <RoadMap />
//       </Slide>
//       <Slide>
//         <Team1 isScroll={isScrollTeam1} />
//       </Slide>
//       <Slide>
//         <Team2 isScroll={isScrollTeam2} />
//       </Slide>
//       <Slide>
//         <Gallery />
//       </Slide>
//     </FullPage>
//   </>
// );
// };
export default About;
