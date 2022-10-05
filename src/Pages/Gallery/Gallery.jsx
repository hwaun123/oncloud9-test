/* eslint-disable default-case */
import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../Images/GalleryImages/gallery1.png";
import img2 from "../../Images/GalleryImages/gallery2.png";
import img3 from "../../Images/GalleryImages/gallery3.png";
import img4 from "../../Images/GalleryImages/gallery4.png";
import img5 from "../../Images/GalleryImages/gallery5.png";
import img6 from "../../Images/GalleryImages/gallery6.png";
import img7 from "../../Images/GalleryImages/gallery7.png";
import img8 from "../../Images/GalleryImages/gallery8.png";
import img9 from "../../Images/GalleryImages/gallery9.png";
import img10 from "../../Images/GalleryImages/gallery10.png";
import img11 from "../../Images/GalleryImages/gallery11.png";

import { useState } from "react";
import useScrollTitle from "../../Hooks/useScrollTitle";
import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import useScrollAbout from "../../Hooks/useScrollAbout";
import Art from "./Art/Art";

const arts = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

const Gallery = ({ galleryRef }) => {
  const [key, setKey] = useState(0);
  const [index, setIndex] = useState(0);
  const handleChage = (i) => {
    setKey(i);
    setIndex(i);
  };
  const settings = {
    dots: true,
    slidesToShow: 3,
    infinite: false,
    beforeChange: (_, i) => {
      handleChage(i);
    },
  };
  // console.log(
  //   new Array(index).fill().map(
  //     (v, i) => `
  // .slick-dots li:nth-child(${i}) > button {
  //   width: 100% !important;
  //   opacity: 1 !important;
  // }
  // `
  //   )
  // );
  const { ref, observed } = useScrollAbout();
  useEffect(() => {
    galleryRef.current = ref.current;
  }, []);
  return (
    <div className="gallery-container">
      <style>
        {new Array(index).fill().map(
          (v, i) => `
          .slick-dots li:nth-child(${i + 1}) > button {
            width: 100% !important;
            opacity: 1 !important;
          }
          `
        )}
      </style>
      <div className="about-title-name" ref={ref}>
        <div className={"title1" + ` ${observed ? "onTeamView" : ""}`}>GA</div>
        <div className={"title2" + ` ${observed ? "onTeamView" : ""}`}>LL</div>
        <div className={"title3" + ` ${observed ? "onTeamView" : ""}`}>ER</div>
        <div className={"title4" + ` ${observed ? "onTeamView" : ""}`}>Y</div>
      </div>
      <Slider {...settings}>
        <div></div>
        {arts.map((img, index) => (
          <Art selection={key} key={index} img={img} id={index} />
        ))}
        <div></div>
      </Slider>
      <Footer />
    </div>
  );
};

export default Gallery;
