import "./Uploader.css";
const Uploader = () => {
  return (
    <div className="uploader">
      <img
        src="./images/uploading.gif"
        alt="uploading"
        className="uploading__img"
      />
      <h1>Uploading...</h1>
      <small className="form__small mb-3">
        Please wait until upload complete!! Do not refresh or leave the page
      </small>
    </div>
  );
};

export default Uploader;
