import { useRef, createRef } from "react";
import { useState } from "react";
import About from "./Pages/About/About";
import NavigationBar from "./Pages/About/NavigationBar/NavigationBar";
const App = () => {
  const [isMuck, setIsMuck] = useState(true);
  const aboutRef = useRef();
  const roadmapRef = useRef();
  const teamRef = useRef();
  const galleryRef = useRef;
  // const aboutRef = createRef();
  console.log(aboutRef);
  return (
    <>
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
