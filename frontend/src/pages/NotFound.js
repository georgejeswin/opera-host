import ERROR from "../components/images/404.png";

const NotFound = () => {
  return (
    <div
      className="notfound"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <img src={ERROR} alt="Error 404" />
    </div>
  );
};

export default NotFound;
