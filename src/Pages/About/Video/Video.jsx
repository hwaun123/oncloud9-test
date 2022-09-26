import "./Video.css";

const Video = ({ isMuck }) => {
  console.log(isMuck);
  return (
    <>
      <video autoPlay muted={isMuck} loop>
        <source src="videos/main_video.mp4" type="video/mp4"></source>
      </video>
    </>
  );
};

export default Video;
