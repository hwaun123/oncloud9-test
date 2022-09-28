import Team1 from "./Team1";
import Team2 from "./Team2";

const Team = ({ teamRef }) => {
  return (
    <>
      <Team1 teamRef={teamRef} />
      <Team2 />
    </>
  );
};

export default Team;
