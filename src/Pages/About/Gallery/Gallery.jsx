/* eslint-disable default-case */
import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../Images/RoadMapImages/roadmap_5_pc.png";
import img2 from "../../../Images/MenberImages/member3.png";
import Content from "./Content";
import { useState } from "react";
import useScrollTitle from "../../../Hooks/useScrollTitle";
const Gallery = () => {
  const [key, setKey] = useState(0);
  const handleChage = (index) => {
    setKey(index);
  };
  const settings = {
    dots: true,
    slidesToShow: 3,
    infinite: false,
    beforeChange: (_, index) => handleChage(index),
  };
  const animatedTitle1 = useScrollTitle();
  const animatedTitle2 = useScrollTitle();
  const animatedTitle3 = useScrollTitle();
  const animatedTitle4 = useScrollTitle();
  return (
    <div className="gallery-container">
      <div className="about-title-name">
        <div className="title1" {...animatedTitle1}>
          GA
        </div>
        <div className="title2" {...animatedTitle2}>
          LL
        </div>
        <div className="title3" {...animatedTitle3}>
          ER
        </div>
        <div className="title4" {...animatedTitle4}>
          Y
        </div>
      </div>
      <Content id={key} />
      <Slider {...settings}>
        <div></div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 0 ? "active" : ""}`}>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 1 ? "active" : ""}`}>
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 2 ? "active" : ""}`}>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 3 ? "active" : ""}`}>
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <div></div>
      </Slider>
    </div>
  );
};

export default Gallery;
