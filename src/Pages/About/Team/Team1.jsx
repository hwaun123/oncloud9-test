import { useEffect, useState } from "react";
import useScrollAbout from "../../../Hooks/useScrollAbout";
import useScrollTeam from "../../../Hooks/useScrollTeam";
import useScrollTitle from "../../../Hooks/useScrollTitle";
import member1 from "../../../Images/MenberImages/member1.png";
import member2 from "../../../Images/MenberImages/member2.png";
import member3 from "../../../Images/MenberImages/member3.png";
import "./Team.css";
const Team1 = ({ teamRef }) => {
  const { ref, isChange } = useScrollTeam();
  console.log(isChange);
  const animatedTitle1 = useScrollTitle();
  const animatedTitle2 = useScrollTitle();
  const animatedTitle3 = useScrollTitle();
  const animatedTitle4 = useScrollTitle();
  return (
    <div className="team-container" ref={teamRef}>
      <div className="about-title-name">
        <div className="title1" {...animatedTitle1}>
          T
        </div>
        <div className="title2" {...animatedTitle2}>
          E
        </div>
        <div className="title3" {...animatedTitle3}>
          A
        </div>
        <div className="title4" {...animatedTitle4}>
          M
        </div>
      </div>
      <div className="team-members">
        <div className="team-members-member">
          <div className="team-members-member-image">
            <img src={member1} alt="" className="member-img"></img>
          </div>

          <div className={`team-members-member-text`} ref={ref}>
            <div
              className={`team-members-member-text-name ${
                isChange ? "onTeamView" : ""
              }`}
            >
              Tyler Lim
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
              }`}
            >
              Founder / CEO
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
              }`}
            >
              • APAC Head of BD/CD at Global Stealth Company
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
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
          <div className={`team-members-member-text`} ref={ref}>
            <div
              className={`team-members-member-text-name ${
                isChange ? "onTeamView" : ""
              }`}
            >
              Helen Cho
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
              }`}
            >
              Founder / CTO
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
              }`}
            >
              • Software Engineer at Google
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
              }`}
            >
              • Technology Analyst at Morgan Stanley
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
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
          <div className={`team-members-member-text `} ref={ref}>
            <div
              className={`team-members-member-text-name ${
                isChange ? "onTeamView" : ""
              }`}
            >
              Jung-Woo Ha
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
              }`}
            >
              Art Director
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
              }`}
            >
              • Main actor of 'Along with the Gods' and 'Suriname'
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
              }`}
            >
              • Actor with a cumulative 115 million+ viewers
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
              }`}
            >
              • Participated in more than 30 exhibitions in Paris, LA,
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
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
