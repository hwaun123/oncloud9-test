import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../Images/RoadMapImages/roadmap_5_pc.png";
import img2 from "../../../Images/MenberImages/member3.png";
import Content from "./Content";
import { useState } from "react";
const Gallery = () => {
  const [key, setKey] = useState(0);
  const settings = {
    dots: true,
    slidesToShow: 3,
    infinite: false,
    beforeChange: (_, index) => setKey(index),
  };
  console.log(key);
  return (
    <div className="gallery-container">
      <div className="gallery-title">GALLERY</div>
      <Content key={key} />
      <Slider {...settings}>
        <div></div>
        <div>
          <div className="gallery-art">
            <div className="gallery-art-img">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className="gallery-art-img">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className="gallery-art-img">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className="gallery-art-img">
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
