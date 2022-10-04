const Section3 = ({ observed }) => {
  return (
    <div className="about-content">
      <div className="about-content-name">
        <div className={"title1" + ` ${observed ? "onTitleView" : ""}`}>
          // &nbsp;
        </div>
        <div className={"title2" + ` ${observed ? "onTitleView" : ""}`}>
          The &nbsp;
        </div>
        <div className={"title3" + ` ${observed ? "onTitleView" : ""}`}>
          Visi{" "}
        </div>
        <div className={"title4" + ` ${observed ? "onTitleView" : ""}`}>
          on &
        </div>
        <div className={"title5" + ` ${observed ? "onTitleView" : ""}`}>
          &nbsp;Value{" "}
        </div>
      </div>
      <div className="about-content-text">
        NFT technology is a cutting-edge tool that allows digital assets to
        transcend their limitations by providing proof of ownership. We aim to
        take it a step further by developing a simple process that allows the
        holders of this collection to wear the PFPs in the metaverses they love.
        Stay tuned for updates!
      </div>
    </div>
  );
};

export default Section3;
