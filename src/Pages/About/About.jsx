import Video from "./Video/Video";
import Main from "./Content/Main";
import { FullPage, Slide } from "react-full-page";
const About = () => {
  return (
    <>
      <FullPage>
        <Slide>
          <Video />
        </Slide>
        <Slide>
          <Main />
        </Slide>
      </FullPage>
    </>
  );
};
export default About;
