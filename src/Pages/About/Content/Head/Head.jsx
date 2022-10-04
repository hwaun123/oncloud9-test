const Head = ({ observed }) => {
  return (
    <div className="about-title">
      <div className="about-title-name">
        <div className={"title1" + ` ${observed ? "onTitleView" : ""}`}>A</div>
        <div className={"title2" + ` ${observed ? "onTitleView" : ""}`}>B</div>
        <div className={"title3" + ` ${observed ? "onTitleView" : ""}`}>O</div>
        <div className={"title4" + ` ${observed ? "onTitleView" : ""}`}>U</div>
        <div className={"title5" + ` ${observed ? "onTitleView" : ""}`}>T</div>
      </div>
      <div className="about-title-text">
        Avant Garde Studio designs and produces luxury digital fashion NFTs and
        continuous profits to holders. Our unique technology, AG Portal allows
        AG NFTs to be converted into wearable assets that can be worn in AG
        compatible digital worlds including metaverses and games. Additionally,
        the holders will receive a continuous income stream from external sales
        of those fashion items in the physical and digital worlds.
      </div>
    </div>
  );
};

export default Head;
