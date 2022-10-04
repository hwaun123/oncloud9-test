import Content from "../Content";
const Art = ({ selection, img, id }) => {
  return (
    <div>
      <div className="gallery-art">
        <Content id={id} selection={selection} />
        <div className={`gallery-art-img ${selection === id ? "active" : ""}`}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Art;
