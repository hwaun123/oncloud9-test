import { useRef, createRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import RoadMap from "./Pages/RoadMap/RoadMap";
import Gallery from "./Pages/Gallery/Gallery";
import Video from "./Pages/Video/Video";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

const App = () => {
  const [isMuck, setIsMuck] = useState(true);
  const aboutRef = useRef();
  const roadmapRef = useRef();
  const teamRef = useRef();
  const galleryRef = useRef;
  // const aboutRef = createRef();
  console.log(aboutRef);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("asdfsdaf", isLoading);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  console.log("isLo", isLoading);
  return (
    <>
      {/* {isLoading && <Loading />} */}
      <NavigationBar
        isMuck={isMuck}
        setIsMuck={setIsMuck}
        aboutRef={aboutRef}
        roadmapRef={roadmapRef}
        teamRef={teamRef}
        galleryRef={galleryRef}
      />
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Video isMuck={isMuck} />
              </div>
              <div className="section">
                <About aboutRef={aboutRef} />
                <RoadMap roadmapRef={roadmapRef} />
                <Team teamRef={teamRef} />
                <Gallery galleryRef={galleryRef} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default App;
