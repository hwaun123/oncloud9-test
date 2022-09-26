import Video from "./Video/Video";
import Main from "./Content/Main";
import ReactFullpage from "@fullpage/react-fullpage";
const About = () => {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Video />
            </div>
            <div className="section">
              <Main />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

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
};
export default About;
