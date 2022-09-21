import "./RoadPoint.css";
const Point1 = ({ isClick }) => {
  return (
    <div className={`point-container ${isClick ? "click" : ""}`}>
      <div className="point-content">
        <div className="point-title">01 Interoperability & Integration</div>
        <div className="point-subTitle">
          We are committed to providing interoperability for the collection by
          allowing them to be integrated into anywhere our holders have an
          online presence.
        </div>
        <div className="point-contents">
          <div className="point-content-title">Web 3.0 Metaverses</div>
          <div className="point-content-texts">
            <div className="point-content-title-text">a. The Sandbox</div>
            <div className="point-content-date">complete</div>
          </div>
          <div className="point-content-texts">
            <div className="point-content-title-text">b. Decentraland</div>
            <div className="point-content-date">complete</div>
          </div>

          <div className="point-content-texts">
            <div className="point-content-title-text">c. Roblox</div>
            <div className="point-content-dates">2023/Q1</div>
          </div>
          <div className="point-content-texts">
            <div className="point-content-title-text">d. Zepeto</div>
            <div className="point-content-dates">2023/Q1</div>
          </div>
          <div className="point-content-texts">
            <div className="point-content-title-text">e. ifland</div>
            <div className="point-content-dates">2023/Q1</div>
          </div>
          <div className="point-content-title">Online Games</div>
          <div className="point-content-texts">
            <div className="point-content-title-text">
              User favorite Web 2.0 & 3.0 games
            </div>
            <div className="point-content-dates">2023</div>
          </div>
        </div>

        {/* <div>
          <div className="point-text-title">1. Proof of Ownership</div>
          <div className="point-text-content">
            Avant Garde Studio’s NFTs have both utilities as fashion items and
            investment assets. As one of the biggest challenges is the
            protection of their works from copyright infringements, Avant Garde
            Studio will solve this through an NFT technology. The NFT technology
            will overcome the limitations of digital fashion by clearly
            inputting the creator, owner, and metadata into a smart contract of
            an NFT.
          </div>
        </div> */}
        {/* <div>
          <div className="point-text-title">2. Digital Fashion NFT</div>
          <div className="point-text-content">
            Digital Fashion NFTs that are being sold at the moment are very
            limited to ‘seeing’ and not being able to be worn neither virtually
            nor in the physical world. AvantGarde Studio values the
            interoperability of NFTs and realizes it through the technology of
            AG Portal. The holders can now wear and experience Avant Garde NFTs
            in metaverses and games that they play every day. The interoperable
            digital worlds will count more than 20 platforms within 2 years.
          </div>
        </div>
        <div>
          <div className="point-text-title">3. Financial Gain </div>
          <div className="point-text-content">
            Avant Garde Studio shares the majority of its profits with holders
            whenever their digital fashion item is sold individually in each
            digital world.
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Point1;
