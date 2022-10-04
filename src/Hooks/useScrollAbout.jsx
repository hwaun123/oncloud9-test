import { useState } from "react";
import { useCallback, useEffect, useRef } from "react";

const useScrollAbout = () => {
  const dom = useRef();
  const [observed, setObserved] = useState(false);

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      current.classList.add("onView");
      console.dir(current);
      setObserved(true);
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
    observed: observed,
  };
};

export default useScrollAbout;
