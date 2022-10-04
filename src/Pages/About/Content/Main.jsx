import "./Main.css";
import useScrollAbout from "../../../Hooks/useScrollAbout";
import useScrollTitle from "../../../Hooks/useScrollTitle";
import { useEffect } from "react";
import Head from "./Head/Head";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";
import { useState } from "react";

const Main = ({ aboutRef }) => {
  const { ref, observed } = useScrollAbout();
  useEffect(() => {
    aboutRef.current = ref.current;
  }, []);
  return (
    <>
      <div className={`about-container`} ref={ref}>
        <Head observed={observed} />
        <Section1 observed={observed} />
        <Section2 observed={observed} />
        <Section3 observed={observed} />
      </div>
    </>
  );
};

export default Main;
