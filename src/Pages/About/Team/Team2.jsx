import { useEffect, useState } from "react";
import member4 from "../../../Images/MenberImages/member4.png";
import member5 from "../../../Images/MenberImages/member5.png";
import member6 from "../../../Images/MenberImages/member6.png";
import "./Team.css";
const Team2 = ({ isScroll }) => {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setIsLoad(isScroll);
  }, [isScroll]);
  return (
    <div className="team-container">
      <div className="team-title"></div>
      <div className="team-members">
        <div className="team-members-member">
          <div className="team-members-member-image">
            <img src={member4} alt="" className="member-img"></img>
          </div>
          <div className={`team-members-member-text ${isLoad ? "" : ""}`}>
            <div
              className={`team-members-member-text-name ${
                isLoad ? "load" : ""
              }`}
            >
              Andrew Choi
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              Advisor
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              • Founder/CEO at SuperNormal
            </div>
          </div>
        </div>
        <div className="team-members-member">
          <div className="team-members-member-image">
            <img src={member5} alt="" className="member-img"></img>
          </div>
          <div className={`team-members-member-text ${isLoad ? "" : ""}`}>
            <div
              className={`team-members-member-text-name ${
                isLoad ? "load" : ""
              }`}
            >
              Thomas
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              CSO
            </div>
          </div>
        </div>
        <div className="team-members-member">
          <div className="team-members-member-image">
            <img src={member6} alt="" className="member-img"></img>
          </div>
          <div className={`team-members-member-text ${isLoad ? "" : ""}`}>
            <div
              className={`team-members-member-text-name ${
                isLoad ? "load" : ""
              }`}
            >
              JJ
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              Head of Operations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team2;
