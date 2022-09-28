/* eslint-disable default-case */
import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../Images/GalleryImages/gallery1.png";
import img2 from "../../../Images/GalleryImages/gallery2.png";
import img3 from "../../../Images/GalleryImages/gallery3.png";
import img4 from "../../../Images/GalleryImages/gallery4.png";
import img5 from "../../../Images/GalleryImages/gallery5.png";
import img6 from "../../../Images/GalleryImages/gallery6.png";
import img7 from "../../../Images/GalleryImages/gallery7.png";
import img8 from "../../../Images/GalleryImages/gallery8.png";
import img9 from "../../../Images/GalleryImages/gallery9.png";
import img10 from "../../../Images/GalleryImages/gallery10.png";
import img11 from "../../../Images/GalleryImages/gallery11.png";

import Content from "./Content";
import { useState } from "react";
import useScrollTitle from "../../../Hooks/useScrollTitle";
import { useEffect } from "react";
import Footer from "../common/Footer/Footer";
const Gallery = ({ galleryRef }) => {
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
  useEffect(() => {
    galleryRef.current = animatedTitle1.ref.current;
  }, []);
  return (
    <div className="gallery-container">
      <div className="gallery-title-name">
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
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 1 ? "active" : ""}`}>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 2 ? "active" : ""}`}>
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 3 ? "active" : ""}`}>
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 4 ? "active" : ""}`}>
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 5 ? "active" : ""}`}>
              <img src={img6} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 6 ? "active" : ""}`}>
              <img src={img7} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 7 ? "active" : ""}`}>
              <img src={img8} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 8 ? "active" : ""}`}>
              <img src={img9} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 9 ? "active" : ""}`}>
              <img src={img10} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="gallery-art">
            <div className={`gallery-art-img ${key === 10 ? "active" : ""}`}>
              <img src={img11} alt="" />
            </div>
          </div>
        </div>
        <div></div>
      </Slider>
      <Footer />
    </div>
  );
};

export default Gallery;
