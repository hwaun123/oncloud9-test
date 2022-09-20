import "./Video.css";

const Video = () => {
  return (
    <>
      <video autoPlay muted loop>
        <source src="videos/main_video.mp4" type="video/mp4"></source>
      </video>
    </>
  );
};

export default Video;
