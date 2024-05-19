import React from "react";

const Footer = (props) => {
  return (
    <>
      <div className="navbar navbar-dark bg-dark border-bottom border-body d-flex justify-content-center align-items-center">
        <span className="navbar-brand fs-6">{props.copyright}</span>
      </div>
    </>
  );
};

export default Footer;
