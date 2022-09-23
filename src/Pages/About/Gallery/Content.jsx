import { useEffect, useState } from "react";
import "./Content.css";
const Content = ({ id }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    switch (id) {
      case 0:
        setTitle("Hello1");
        setText("Hello1");
        break;
      case 1:
        setTitle("Hello2");
        setText("Hello2");
        break;
      case 2:
        setTitle("Hello3");
        setText("Hello3");
        break;
      case 3:
        setTitle("Hello4");
        setText("Hello4");
        break;
    }
  }, [id]);

  return (
    <div className="content-container">
      <div className="content-title">{title}</div>
      <div className="content-text">{text}</div>
    </div>
  );
};

export default Content;
