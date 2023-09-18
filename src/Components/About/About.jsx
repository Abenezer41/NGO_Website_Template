import React from "react";
import './About.css'

const About = () => {
  return (
    <div className="about_container">
      <div className="about_left">
        <h1>About Our Charity</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam vitae voluptates qui veniam quos nesciunt inventore ipsum
          quibusdam velit quasi, maxime debitis. Explicabo nobis quisquam
          voluptatem facere assumenda velit!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam vitae voluptates qui veniam quos nesciunt inventore ipsum
          quibusdam velit quasi, maxime debitis. Explicabo nobis quisquam
          voluptatem facere assumenda velit!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam vitae voluptates qui veniam quos nesciunt inventore ipsum
          quibusdam velit quasi, maxime debitis. Explicabo nobis quisquam
          voluptatem facere assumenda velit!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aspernatur quisquam vitae voluptates qui
          veniam quos nesciunt inventore ipsum quibusdam velit quasi, maxime
          debitis. Explicabo nobis quisquam voluptatem facere assumenda velit!
        </p>
      </div>
      <div className="about_right">
            <div className="g1">
                <i className="fa fa-user"></i>
                <h3>Become a Volentter</h3>
            </div>
            <div className="g2">
            <i className="fa fa-search-plus"></i>
                <h3>Quick Fundraiser</h3>
            </div>
            <div className="g3">
            <i className="fa fa-usd"></i>
                <h3>Give Donation</h3>
            </div>
            <div className="g4">
            <i className="fa fa-handshake-o"></i>
                <h3>Help Someone</h3>
            </div>
      </div>
    </div>
  );
};

export default About;
