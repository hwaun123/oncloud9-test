import "./Main.css";
import useScrollAbout from "../../../Hooks/useScrollAbout";
import useScrollTitle from "../../../Hooks/useScrollTitle";
import { useEffect } from "react";
import Head from "./Head/Head";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";

const Main = ({ aboutRef }) => {
  const animatedItem = useScrollAbout();
  // useScrollTitle()
  useEffect(() => {
    aboutRef.current = animatedItem.ref.current;
  }, []);
  return (
    <>
      <div className={`about-container`} {...animatedItem}>
        <Head />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
};

export default Main;
