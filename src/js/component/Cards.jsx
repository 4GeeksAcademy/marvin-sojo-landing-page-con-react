import React from "react";

const Cards = (props) => {
  return (
    <div className="card m-3 p-0" style={{ width: "18rem" }}>
      <img src={props.imageCard} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.urlBtn} className="btn btn-primary">
          {props.labelBtn}
        </a>
      </div>
    </div>
  );
};

export default Cards;
