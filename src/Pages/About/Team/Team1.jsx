import { useEffect, useState } from "react";
import useScrollAbout from "../../../Hooks/useScrollAbout";
import member1 from "../../../Images/MenberImages/member1.png";
import member2 from "../../../Images/MenberImages/member2.png";
import member3 from "../../../Images/MenberImages/member3.png";
import "./Team.css";
const Team1 = ({ isScroll }) => {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setIsLoad(isScroll);
  }, [isScroll]);
  const animatedItem = useScrollAbout();
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
              className={`team-members-member-text-name ${isLoad ? "" : ""}`}
              {...animatedItem}
            >
              Tyler Lim
            </div>
            <div
              className={`team-members-member-text-context ${isLoad ? "" : ""}`}
              {...animatedItem}
            >
              Founder / CEO
            </div>
            <div
              className={`team-members-member-text-context ${isLoad ? "" : ""}`}
              {...animatedItem}
            >
              • APAC Head of BD/CD at Global Stealth Company
            </div>
            <div
              className={`team-members-member-text-context ${isLoad ? "" : ""}`}
              {...animatedItem}
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
              className={`team-members-member-text-name ${isLoad ? "" : ""}`}
              {...animatedItem}
            >
              Helen Cho
            </div>
            <div
              className={`team-members-member-text-context ${isLoad ? "" : ""}`}
              {...animatedItem}
            >
              Founder / CTO
            </div>
            <div
              className={`team-members-member-text-context ${isLoad ? "" : ""}`}
              {...animatedItem}
            >
              • Software Engineer at Google
            </div>
            <div
              className={`team-members-member-text-context ${isLoad ? "" : ""}`}
              {...animatedItem}
            >
              • Technology Analyst at Morgan Stanley
            </div>
            <div
              className={`team-members-member-text-context ${isLoad ? "" : ""}`}
              {...animatedItem}
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
              className={`team-members-member-text-name ${isLoad ? "" : ""}`}
              {...animatedItem}
            >
              Jung-Woo Ha
            </div>
            <div
              className={`team-members-member-text-context ${isLoad ? "" : ""}`}
              {...animatedItem}
            >
              Art Director
            </div>
            <div
              className={`team-members-member-text-context ${isLoad ? "" : ""}`}
              {...animatedItem}
            >
              • Main actor of 'Along with the Gods' and 'Suriname'
            </div>
            <div
              className={`team-members-member-text-context ${isLoad ? "" : ""}`}
              {...animatedItem}
            >
              • Actor with a cumulative 115 million+ viewers
            </div>
            <div
              className={`team-members-member-text-context ${isLoad ? "" : ""}`}
              {...animatedItem}
            >
              • Participated in more than 30 exhibitions in Paris, LA,
            </div>
            <div
              className={`team-members-member-text-context ${isLoad ? "" : ""}`}
              {...animatedItem}
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
