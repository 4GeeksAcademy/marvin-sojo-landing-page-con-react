import React from "react";
import Navbar from "./Navbar";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container d-flex justify-content-center p-0">
        <div className="container row text-center d-flex justify-content-center">
          <Cards
            imageCard="https://picsum.photos/300/200?random=1"
            title="Card Title"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, fuga fugit facere porro labore quo."
            urlBtn="#"
            labelBtn="Find Out More!"
          />
          <Cards
            imageCard="https://picsum.photos/300/200?random=2"
            title="Card Title"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, fuga fugit facere porro labore quo."
            urlBtn="#"
            labelBtn="Find Out More!"
          />
          <Cards
            imageCard="https://picsum.photos/300/200?random=3"
            title="Card Title"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, fuga fugit facere porro labore quo."
            urlBtn="#"
            labelBtn="Find Out More!"
          />
          <Cards
            imageCard="https://picsum.photos/300/200?random=4"
            title="Card Title"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, fuga fugit facere porro labore quo."
            urlBtn="#"
            labelBtn="Find Out More!"
          />
        </div>
      </div>
      <Footer copyright="Copyright © Your Website 2024" />
    </>
  );
};

export default Home;
