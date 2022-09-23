import "./CloseButton.css";

const CloseButton = ({ closePoint }) => {
  return (
    <button onClick={closePoint} class="close-button" href="/">
      Close
    </button>
  );
};

export default CloseButton;
