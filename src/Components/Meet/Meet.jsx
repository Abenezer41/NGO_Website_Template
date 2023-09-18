import React from "react";
import "./Meet.css";

const Meet = () => {
  return (
    <div className="meet_container">
      <h1>Meet our Team</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla
        vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit
      </p>

      <div className="staff">
        <div className="st1">
          <div className="top_staff">
            <img
              src="https://www.yudaah.com/demo/ngo-responsive-website-template-free-download/assets/images/team/team-memb1.jpg"
              alt=""
            />
          </div>
          <div className="bottom_staff">
            <h6>Abenezer Tenkir</h6>
            <p>Team Leader</p>
          </div>
        </div>
        <div className="st2">
          <div className="top_staff">
            <img
              src="https://www.yudaah.com/demo/ngo-responsive-website-template-free-download/assets/images/team/team-memb2.jpg"
              alt=""
            />
          </div>
          <div className="bottom_staff">
            <h6>Seyifu Mulat</h6>
            <p>Fund Raiser</p>
          </div>
        </div>
        <div className="st3">
          <div className="top_staff">
            <img
              src="https://www.yudaah.com/demo/ngo-responsive-website-template-free-download/assets/images/team/team-memb3.jpg"
              alt=""
            />
          </div>
          <div className="bottom_staff">
            <h6>Melat Belete</h6>
            <p>Donore</p>
          </div>
        </div>
        <div className="st4">
          <div className="top_staff">
            <img
              src="https://www.yudaah.com/demo/ngo-responsive-website-template-free-download/assets/images/team/team-memb4.jpg"
              alt=""
            />
          </div>
          <div className="bottom_staff">
            <h6>Hailu Kinfe</h6>
            <p>Artist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
