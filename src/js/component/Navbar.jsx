import React from "react";


const Navbar = () => {
  const brand = "Start Bootstrap"; // Aqui podemos modificar el nombre o logo de la página en el navbar.

  // Aquí podemos añadir o modificar los links del navbar.
  const navLinks = [
    {
      id: "0",
      nameNavLink: "Home",
      urlNavLink: "#",
    },
    {
      id: "1",
      nameNavLink: "About",
      urlNavLink: "#",
    },
    {
      id: "2",
      nameNavLink: "Services",
      urlNavLink: "#",
    },
    {
      id: "3",
      nameNavLink: "Contact",
      urlNavLink: "#",
    },
    
  ];

  const linkInHtml = navLinks.map((singleLink, index) => {
    return (
      <li className="nav-item" key={index}>
        <a className="nav-link" href={singleLink.urlNavLink}>
          {singleLink.nameNavLink}
        </a>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          {brand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">{linkInHtml}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
