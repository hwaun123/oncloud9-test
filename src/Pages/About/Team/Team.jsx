import member1 from "../../../Images/MenberImages/member1.png";
import member2 from "../../../Images/MenberImages/member2.png";
import member3 from "../../../Images/MenberImages/member3.png";
import member4 from "../../../Images/MenberImages/member4.png";
import member5 from "../../../Images/MenberImages/member5.png";
import member6 from "../../../Images/MenberImages/member6.png";
import "./Team.css";
const Team = () => {
  return (
    <div className="team-container">
      <div className="team-title">TEAM</div>
      <div className="team-members">
        <div className="team-members-member">
          <img src={member1} alt=""></img>
          <div className="team-members-member-text">
            <div className="team-members-member-text-name">Tyler Lim</div>
            <div className="team-members-member-text-context">
              Founder / CEO
            </div>
            <div className="team-members-member-text-context">
              • APAC Head of BD/CD at Global Stealth Company
            </div>
            <div className="team-members-member-text-context">
              • Founder/CEO at Simple Kitchen (Exited ~USD 10M)
            </div>
          </div>
        </div>
        <div className="team-members-member">
          <img src={member2} alt=""></img>
          <div className="team-members-member-text">
            <div className="team-members-member-text-name">Helen Cho</div>
            <div className="team-members-member-text-context">
              Founder / CTO
            </div>
            <div className="team-members-member-text-context">
              • Software Engineer at Google
            </div>
            <div className="team-members-member-text-context">
              • Technology Analyst at Morgan Stanley
            </div>
            <div className="team-members-member-text-context">
              • Technology Analyst at Merrill Lynch
            </div>
          </div>
        </div>
        <div className="team-members-member">
          <img src={member3} alt=""></img>
          <div className="team-members-member-text">
            <div className="team-members-member-text-name">Jung-Woo Ha</div>
            <div className="team-members-member-text-context">Art Director</div>
            <div className="team-members-member-text-context">
              • Main actor of 'Along with the Gods' and 'Suriname'
            </div>
            <div className="team-members-member-text-context">
              • Actor with a cumulative 115 million+ viewers
            </div>
            <div className="team-members-member-text-context">
              • Participated in more than 30 exhibitions in Paris, LA,
            </div>
            <div className="team-members-member-text-context">
              and Seoul as a painter
            </div>
          </div>
        </div>
      </div>
      <div className="team-members">
        <div className="team-members-member">
          <img src={member1} alt=""></img>
          <div className="team-members-member-text">
            <div className="team-members-member-text-name">Tyler Lim</div>
            <div className="team-members-member-text-context">
              Founder / CEO
            </div>
            <div className="team-members-member-text-context">
              • APAC Head of BD/CD at Global Stealth Company
            </div>
            <div className="team-members-member-text-context">
              • Founder/CEO at Simple Kitchen (Exited ~USD 10M)
            </div>
          </div>
        </div>
        <div className="team-members-member">
          <img src={member2} alt=""></img>
          <div className="team-members-member-text">
            <div className="team-members-member-text-name">Helen Cho</div>
            <div className="team-members-member-text-context">
              Founder / CTO
            </div>
            <div className="team-members-member-text-context">
              • Software Engineer at Google
            </div>
            <div className="team-members-member-text-context">
              • Technology Analyst at Morgan Stanley
            </div>
            <div className="team-members-member-text-context">
              • Technology Analyst at Merrill Lynch
            </div>
          </div>
        </div>
        <div className="team-members-member">
          <img src={member3} alt=""></img>
          <div className="team-members-member-text">
            <div className="team-members-member-text-name">Jung-Woo Ha</div>
            <div className="team-members-member-text-context">Art Director</div>
            <div className="team-members-member-text-context">
              • Main actor of 'Along with the Gods' and 'Suriname'
            </div>
            <div className="team-members-member-text-context">
              • Actor with a cumulative 115 million+ viewers
            </div>
            <div className="team-members-member-text-context">
              • Participated in more than 30 exhibitions in Paris, LA,
            </div>
            <div className="team-members-member-text-context">
              and Seoul as a painter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
