const Member = ({ img, isChange, name, position, contents }) => {
  return (
    <div className="team-members-member">
      <div className="team-members-member-image">
        <img src={img} alt="" className="member-img"></img>
      </div>

      <div className={`team-members-member-text`}>
        <div
          className={`team-members-member-text-name ${
            isChange ? "onTeamView" : ""
          }`}
        >
          {name}
        </div>
        <div
          className={`team-members-member-text-context ${
            isChange ? "onTeamView" : ""
          }`}
        >
          {position}
        </div>
        {contents.map((text) => (
          <div
            className={`team-members-member-text-context ${
              isChange ? "onTeamView" : ""
            }`}
          >
            • {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
