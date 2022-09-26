import { useEffect, useState } from "react";
import "./Content.css";
const Content = ({ id }) => {
  const [title, setTitle] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  useEffect(() => {
    switch (id) {
      case 0:
        setTitle("HA JUNG WOO");
        setText1("Dream");
        setText2("2010");
        setText3("Mixed Media on PlyWood");
        setText4("88 x 65 cm");
        break;
      case 1:
        setTitle("HA JUNG WOO");
        setText1("Portrait G");
        setText2("2022");
        setText3("Mixed Media on Canvas");
        setText4("116.8 x 91 cm");
        break;
      case 2:
        setTitle("HA JUNG WOO");
        setText1("Work");
        setText2("2018");
        setText3("Oil on Canvas");
        setText4("101.5 x 76 cm");
        break;
      case 3:
        setTitle("HA JUNG WOO");
        setText1("Berlin");
        setText2("2012");
        setText3("Acrylic, Pen on Canvas");
        setText4("178 x 139 cm");
        break;
      case 4:
        setTitle("HA JUNG WOO");
        setText1("Grapeseed");
        setText2("2019");
        setText3("Mixed Media on Canvas");
        setText4("53.0 x 45.5 cm");
        break;
      case 5:
        setTitle("HA JUNG WOO");
        setText1("Untitled");
        setText2("2021");
        setText3("Oil on Canvas");
        setText4("73 x 61 cm");
        break;
      case 6:
        setTitle("HA JUNG WOO");
        setText1("Red flower 2");
        setText2("2013");
        setText3("Acrylic, Pen on Canvas");
        setText4("50 x 39 cm");
        break;
      case 7:
        setTitle("HA JUNG WOO");
        setText1("Portrait L");
        setText2("2020");
        setText3("Mixed Media on Canvas");
        setText4("72.7 x 60.6 cm");
        break;
      case 8:
        setTitle("HA JUNG WOO");
        setText1("Berlin");
        setText2("2012");
        setText3("Acrylic, Pen on Canvas");
        setText4("178 x 139 cm");
        break;
      case 9:
        setTitle("HA JUNG WOO");
        setText1("Berlin");
        setText2("2012");
        setText3("Acrylic, Pen on Canvas");
        setText4("178 x 139 cm");
        break;
      case 10:
        setTitle("HA JUNG WOO");
        setText1("Berlin");
        setText2("2012");
        setText3("Acrylic, Pen on Canvas");
        setText4("178 x 139 cm");
        break;
      case 11:
        setTitle("HA JUNG WOO");
        setText1("Berlin");
        setText2("2012");
        setText3("Acrylic, Pen on Canvas");
        setText4("178 x 139 cm");
        break;
    }
  }, [id]);

  return (
    <div className="content-container">
      <div className="content-title">{title}</div>
      <div className="content-text">{text1}</div>
      <div className="content-text">{text2}</div>
      <div className="content-text">{text3}</div>
      <div className="content-text">{text4}</div>
    </div>
  );
};

export default Content;
