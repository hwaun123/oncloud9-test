import CloseButton from "./CloseButton";

const Point3 = ({ closePoint }) => {
  return (
    <div className="point-container">
      <div className="point-content">
        <CloseButton closePoint={closePoint} />
        <div>
          <div className="point-title">03 Holder Benefits</div>
          <div className="point-subTitle">
            In addition to gaining exclusive access to airdrops and priority
            sales of our upcoming projects, holders of our collection will be
            able to profit from secondary sales of the wearable assets included
            in the PFPs in each of the supported metaverses and platforms.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Point3;
