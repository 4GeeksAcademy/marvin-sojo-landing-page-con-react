import React from "react";

const Jumbotron = () => {
  const modifyJumbotron = {
    title: "A Warm Welcome!",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio voluptatum tempore laudantium nobis ipsa hic debitis ab, quidem vel, quia deleniti, beatae sunt impedit mollitia consequatur sit vero a culpa.",
    labelButton: "Call to action!",
  };
  return (
    <div className="d-flex align-items-center">
      <div className="container p-5 bg-light my-5">
        <h1 className="display-1">{modifyJumbotron.title}</h1>
        <p className="fs-4">{modifyJumbotron.description}</p>
        <button className="btn btn-primary btn-lg" type="button">
          {modifyJumbotron.labelButton}
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
