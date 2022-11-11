import React from "react";

// import Navbar from "../Navbar/Navbar";
import "./HomePage.css";
import people from "./img/people.png";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container-HomePage">
        <div className="content-Homepage">
          <p>FABLE</p>
          <p>
            Moscow clothing brand that doesn't limit itself to the framework of
            any concepts
          </p>
          <p className="imgHomePage">
            <img src={people} alt="people" />
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
