import { useCallback, useEffect, useRef } from "react";

const useScrollAbout = () => {
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      current.classList.add("onView");
      console.dir(current);
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
  };
};

export default useScrollAbout;
