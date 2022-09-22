import "./Content.css";
const Content = ({ key }) => {
  console.log(key);
  return (
    <div className="content-container">
      <div className="content-title">Ha JUNG WOO</div>
      <div className="content-text">Dream</div>
    </div>
  );
};

export default Content;
