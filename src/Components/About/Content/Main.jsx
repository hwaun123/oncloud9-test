import "./Main.css";
import RoadMap from "../../RoadMap/RoadMap";
import Gallery from "../../Gallery/Gallery";
import Team1 from "../../Team/Team1";
import Team2 from "../../Team/Team2";
import useScrollAbout from "../../../Hooks/useScrollAbout";
import useScrollTitle from "../../../Hooks/useScrollTitle";
import { useEffect } from "react";

const Main = ({ aboutRef, roadmapRef, teamRef, galleryRef }) => {
  const animatedItem = useScrollAbout();
  const animatedTitle1 = useScrollTitle();
  const animatedTitle2 = useScrollTitle();
  const animatedTitle3 = useScrollTitle();
  const animatedTitle4 = useScrollTitle();
  const animatedTitle5 = useScrollTitle();
  const animatedTitle6 = useScrollTitle();
  const animatedTitle7 = useScrollTitle();
  const animatedTitle8 = useScrollTitle();
  const animatedTitle9 = useScrollTitle();
  const animatedTitle10 = useScrollTitle();
  const animatedTitle11 = useScrollTitle();
  const animatedTitle12 = useScrollTitle();
  const animatedTitle13 = useScrollTitle();
  const animatedTitle14 = useScrollTitle();
  const animatedTitle15 = useScrollTitle();
  const animatedTitle16 = useScrollTitle();
  const animatedTitle17 = useScrollTitle();
  const animatedTitle18 = useScrollTitle();
  const animatedTitle19 = useScrollTitle();
  const animatedTitle20 = useScrollTitle();
  useEffect(() => {
    aboutRef.current = animatedItem.ref.current;
  }, []);
  return (
    <>
      <div className={`about-container`} {...animatedItem}>
        <div className="about-title">
          <div className="about-title-name">
            <div className="title1" {...animatedTitle1}>
              A
            </div>
            <div className="title2" {...animatedTitle2}>
              B
            </div>
            <div className="title3" {...animatedTitle3}>
              O
            </div>
            <div className="title4" {...animatedTitle4}>
              U
            </div>
            <div className="title5" {...animatedTitle5}>
              T
            </div>
          </div>
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
          <div className="about-content-name">
            <div className="title1" {...animatedTitle6}>
              // &nbsp;
            </div>
            <div className="title2" {...animatedTitle7}>
              The &nbsp;
            </div>
            <div className="title3" {...animatedTitle8}>
              Col{" "}
            </div>
            <div className="title4" {...animatedTitle9}>
              lect{" "}
            </div>
            <div className="title5" {...animatedTitle10}>
              ion{" "}
            </div>
          </div>
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
          <div className="about-content-name">
            <div className="title1" {...animatedTitle11}>
              // &nbsp;
            </div>
            <div className="title2" {...animatedTitle12}>
              The &nbsp;
            </div>
            <div className="title3" {...animatedTitle13}>
              Art &nbsp;
            </div>
            <div className="title4" {...animatedTitle14}>
              Conc{" "}
            </div>
            <div className="title5" {...animatedTitle15}>
              ept{" "}
            </div>
          </div>
          <div className="about-content-text">
            This collection features the unique style of Ha Jung Woo's artwork
            in the form of NFTs that embodies the beauty and diversity
            SuperNormal stands for.
          </div>
        </div>
        <div className="about-content">
          <div className="about-content-name">
            <div className="title1" {...animatedTitle16}>
              // &nbsp;
            </div>
            <div className="title2" {...animatedTitle17}>
              The &nbsp;
            </div>
            <div className="title3" {...animatedTitle18}>
              Visi{" "}
            </div>
            <div className="title4" {...animatedTitle19}>
              on &nbsp;& &nbsp;V
            </div>
            <div className="title5" {...animatedTitle20}>
              alue{" "}
            </div>
          </div>
          <div className="about-content-text">
            NFT technology is a cutting-edge tool that allows digital assets to
            transcend their limitations by providing proof of ownership. We aim
            to take it a step further by developing a simple process that allows
            the holders of this collection to wear the PFPs in the metaverses
            they love. Stay tuned for updates!
          </div>
        </div>
        <form />
      </div>
      <RoadMap roadmapRef={roadmapRef} />
      <Team1 teamRef={teamRef} />
      <Team2 />
      <Gallery galleryRef={galleryRef} />
    </>
  );
};

export default Main;
