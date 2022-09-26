import { useState } from "react";
import About from "./Pages/About/About";
import NavigationBar from "./Pages/About/NavigationBar/NavigationBar";

const App = () => {
  const [isMuck, setIsMuck] = useState(true);
  return (
    <>
      <NavigationBar isMuck={isMuck} setIsMuck={setIsMuck} />
      <About isMuck={isMuck} />
    </>
  );
};

export default App;
