import { useEffect, useState } from "react";
import member1 from "../../../Images/MenberImages/member1.png";
import member2 from "../../../Images/MenberImages/member2.png";
import member3 from "../../../Images/MenberImages/member3.png";
import "./Team.css";
const Team1 = ({ isScroll }) => {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setIsLoad(isScroll);
  }, [isScroll]);
  return (
    <div className="team-container">
      <div className="team-title">TEAM</div>
      <div className="team-members">
        <div className="team-members-member">
          <div className="team-members-member-image">
            <img src={member1} alt="" className="member-img"></img>
          </div>

          <div className={`team-members-member-text ${isLoad ? "" : ""}`}>
            <div
              className={`team-members-member-text-name ${
                isLoad ? "load" : ""
              }`}
            >
              Tyler Lim
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              Founder / CEO
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              • APAC Head of BD/CD at Global Stealth Company
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              • Founder/CEO at Simple Kitchen (Exited ~USD 10M)
            </div>
          </div>
        </div>
        <div className="team-members-member">
          <div className="team-members-member-image">
            <img src={member2} alt="" className="member-img"></img>
          </div>
          <div className={`team-members-member-text ${isLoad ? "" : ""}`}>
            <div
              className={`team-members-member-text-name ${
                isLoad ? "load" : ""
              }`}
            >
              Helen Cho
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              Founder / CTO
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              • Software Engineer at Google
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              • Technology Analyst at Morgan Stanley
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              • Technology Analyst at Merrill Lynch
            </div>
          </div>
        </div>
        <div className="team-members-member">
          <div className="team-members-member-image">
            <img src={member3} alt="" className="member-img"></img>
          </div>
          <div className={`team-members-member-text ${isLoad ? "" : ""}`}>
            <div
              className={`team-members-member-text-name ${
                isLoad ? "load" : ""
              }`}
            >
              Jung-Woo Ha
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              Art Director
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              • Main actor of 'Along with the Gods' and 'Suriname'
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              • Actor with a cumulative 115 million+ viewers
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              • Participated in more than 30 exhibitions in Paris, LA,
            </div>
            <div
              className={`team-members-member-text-context ${
                isLoad ? "load" : ""
              }`}
            >
              and Seoul as a painter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team1;
