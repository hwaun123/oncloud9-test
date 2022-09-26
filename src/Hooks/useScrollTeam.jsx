import { useState } from "react";
import { useCallback, useEffect, useRef } from "react";

const useScrollTeam = () => {
  const dom = useRef();
  const [isChange, setIsChange] = useState(false);

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;
    if (entry.isIntersecting) {
      console.log(current.className);
      current.classList.add("onTeamView");
      console.log("teamview");
      console.dir(current);
      setIsChange(true);
      // current.style = {transform: "translate3d(0%, 0%, 0px)"}
      // current.aboutContainer.opacity = 1;
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    isChange,
  };
};

export default useScrollTeam;
