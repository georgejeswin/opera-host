import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ bg, content, title }) => {
  return (
    <div className="card">
      <div
        className="card-front"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="card-back" style={{ backgroundImage: `url(${bg})` }}>
        <h2>
          Jane Doe
          <br />
          <span>Senior Designer</span>
        </h2>
        <div className="social-icons">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex est aut
            eveniet maxime unde placeat id qui, repudiandae nesciunt esse.
            Debitis aperiam aut veritatis, minus autem nisi. Harum, cumque
            tempore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
