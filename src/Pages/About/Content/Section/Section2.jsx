const Section2 = ({ observed }) => {
  return (
    <div className="about-content">
      <div className="about-content-name">
        <div className={"title1" + ` ${observed ? "onTitleView" : ""}`}>
          // &nbsp;
        </div>
        <div className={"title1" + ` ${observed ? "onTitleView" : ""}`}>
          The &nbsp;
        </div>
        <div className={"title1" + ` ${observed ? "onTitleView" : ""}`}>
          Art &nbsp;
        </div>
        <div className={"title1" + ` ${observed ? "onTitleView" : ""}`}>
          Conc{" "}
        </div>
        <div className={"title1" + ` ${observed ? "onTitleView" : ""}`}>
          ept{" "}
        </div>
      </div>
      <div className="about-content-text">
        This collection features the unique style of Ha Jung Woo's artwork in
        the form of NFTs that embodies the beauty and diversity SuperNormal
        stands for.
      </div>
    </div>
  );
};

export default Section2;
