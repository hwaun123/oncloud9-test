import { useRef, createRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import About from "./Pages/About/About";
import Loading from "./Pages/About/Loading/Loading";
import NavigationBar from "./Pages/About/NavigationBar/NavigationBar";
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
      <About
        isMuck={isMuck}
        aboutRef={aboutRef}
        roadmapRef={roadmapRef}
        teamRef={teamRef}
        galleryRef={galleryRef}
      />
    </>
  );
};

export default App;
