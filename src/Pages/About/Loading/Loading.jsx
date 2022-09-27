import "./Loading.css";
import onLoading from "./onLoading.gif";
const Loading = () => {
  return (
    <div className="loading">
      <img src={onLoading}></img>
    </div>
  );
};

export default Loading;
