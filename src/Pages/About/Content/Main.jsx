import { useEffect, useState } from "react";
import "./Main.css";
const Main = ({ isScroll }) => {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setIsLoad(isScroll);
  }, [isScroll]);
  return (
    <>
      <div className={`about-container ${isLoad ? "load" : ""}`}>
        <div className="about-title">
          <h1 className="about-title-key">ABOUT</h1>
          <div className="about-title-text">
            Avant Garde Studio designs and produces luxury digital fashion NFTs
            and continuous profits to holders. Our unique technology, AG Portal
            allows AG NFTs to be converted into wearable assets that can be worn
            in AG compatible digital worlds including metaverses and games.
            Additionally, the holders will receive a continuous income stream
            from external sales of those fashion items in the physical and
            digital worlds.
          </div>
        </div>
        <div className="about-content">
          <h1 className="about-content-key">// The Collection</h1>
          <div className="about-content-text">
            We are proud to present the Ha Jung Woo x SuperNormal collection, a
            limited edition line of PFP NFTs inspired by the work of renowned
            Korean artist Ha Jung Woo. The collection was generated with more
            than 500 unique wearable items, each curated with Ha Jung Woo's
            signature style. With only 1,978 NFTs available, this collection
            offers a rare opportunity to own a unique piece of art that has the
            touch of both Ha Jung Woo and SuperNormal.
          </div>
        </div>
        <div className="about-content">
          <h1 className="about-content-key">// The Art Concept</h1>
          <div className="about-content-text">
            This collection features the unique style of Ha Jung Woo's artwork
            in the form of NFTs that embodies the beauty and diversity
            SuperNormal stands for.
          </div>
        </div>
        <div className="about-content">
          <h1 className="about-content-key">// The Vision & Value</h1>
          <div className="about-content-text">
            NFT technology is a cutting-edge tool that allows digital assets to
            transcend their limitations by providing proof of ownership. We aim
            to take it a step further by developing a simple process that allows
            the holders of this collection to wear the PFPs in the metaverses
            they love. Stay tuned for updates!
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
