import React from "react";
import './Achive.css'

const Achive = () => {
  return (
    <div className="achive_container">
      <div className="achive_top">
        <h2>Our Achievemtns in Numbers</h2>
        <p>
          We can talk for a long time about advantages of our Dental clinic
          before other medical treatment facilities. But you can read the
        </p>
        <p>following facts in order to make sure of all pluses of our clinic:</p>
      </div>
      <div className="achive_bot">
        <div className="a1">
            <h2>12+</h2>
            <hr />
            <h6>YEARS OF EXPEREANCE</h6>
        </div>
        <div className="a2">
        <h2>1812+</h2>
            <hr />
            <h6>HAPPY CHILDRENS</h6>
        </div>
        <div className="a3">
        <h2>52+</h2>
            <hr />
            <h6>EVENTS</h6>
        </div>
        <div className="a4">
        <h2>48+</h2>
            <hr />
            <h6>FUND RAISED</h6>
        </div>
      </div>
    </div>
  );
};

export default Achive;
