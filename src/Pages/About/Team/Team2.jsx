import useScrollTeam from "../../../Hooks/useScrollTeam";
import member4 from "../../../Images/MenberImages/member4.png";
import member5 from "../../../Images/MenberImages/member5.png";
import member6 from "../../../Images/MenberImages/member6.png";
import "./Team.css";
const Team2 = ({ isScroll }) => {
  const { ref, isChange } = useScrollTeam();

  return (
    <div className="team-container">
      <div className="team-title"></div>
      <div className="team-members">
        <div className="team-members-member">
          <div className="team-members-member-image">
            <img src={member4} alt="" className="member-img"></img>
          </div>
          <div className={`team-members-member-text`} ref={ref}>
            <div
              className={`team-members-member-text-name ${
                isChange ? "onTeamView" : ""
              }`}
            >
              Andrew Choi
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
              }`}
            >
              Advisor
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
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
          <div className={`team-members-member-text`} ref={ref}>
            <div
              className={`team-members-member-text-name ${
                isChange ? "onTeamView" : ""
              }`}
            >
              Thomas
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
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
          <div className={`team-members-member-text`} ref={ref}>
            <div
              className={`team-members-member-text-name ${
                isChange ? "onTeamView" : ""
              }`}
            >
              JJ
            </div>
            <div
              className={`team-members-member-text-context ${
                isChange ? "onTeamView" : ""
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
