const Section1 = ({ observed }) => {
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
          Col{" "}
        </div>
        <div className={"title4" + ` ${observed ? "onTitleView" : ""}`}>
          lect{" "}
        </div>
        <div className={"title5" + ` ${observed ? "onTitleView" : ""}`}>
          ion{" "}
        </div>
      </div>
      <div className="about-content-text">
        We are proud to present the Ha Jung Woo x SuperNormal collection, a
        limited edition line of PFP NFTs inspired by the work of renowned Korean
        artist Ha Jung Woo. The collection was generated with more than 500
        unique wearable items, each curated with Ha Jung Woo's signature style.
        With only 1,978 NFTs available, this collection offers a rare
        opportunity to own a unique piece of art that has the touch of both Ha
        Jung Woo and SuperNormal.
      </div>
    </div>
  );
};

export default Section1;
