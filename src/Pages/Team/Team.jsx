import useScrollTeam from "../../Hooks/useScrollTeam";
import useScrollTitle from "../../Hooks/useScrollTitle";
import member1 from "../../Images/MenberImages/member1.png";
import member2 from "../../Images/MenberImages/member2.png";
import member3 from "../../Images/MenberImages/member3.png";
import member4 from "../../Images/MenberImages/member4.png";
import member5 from "../../Images/MenberImages/member5.png";
import member6 from "../../Images/MenberImages/member6.png";
import Member from "./Member/Member";
import "./Team.css";

const members = [
  {
    name: "Tyler Lim",
    position: "Founder / CEO",
    contents: [
      "APAC Head of BD/CD at Global Stealth Company",
      "Founder/CEO at Simple Kitchen (Exited ~USD 10M)",
    ],
    img: member1,
  },
  {
    name: "Helen Cho",
    position: "Founder / CTO",
    contents: [
      "Software Engineer at Google",
      "Technology Analyst at Morgan Stanley",
      "Technology Analyst at Merrill Lynch",
    ],
    img: member2,
  },
  {
    name: "Jung-Woo Ha",
    position: "Art Director",
    contents: [
      "- Main actor of 'Along with the Gods' and 'Suriname'",
      "- Actor with a cumulative 115 million+ viewers",
      "- Participated in more than 30 exhibitions in Paris, LA, and Seoul as a painter",
    ],
    img: member3,
  },
  {
    name: "Andrew Choi",
    position: "Advisor",
    contents: ["Founder/CEO at SuperNormal"],
    img: member4,
  },
  { name: "Thomas", position: "CSO", contents: [], img: member5 },
  { name: "JJ", position: "Head of Operations", contents: [], img: member6 },
];

const Team = ({ teamRef }) => {
  const { ref, isChange } = useScrollTeam();
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
      <div className="team-members" ref={ref}>
        {members.map((member, key) => (
          <Member key={key} isChange={isChange} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
