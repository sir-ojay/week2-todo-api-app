import React from "react";
import GetMoreDone from "./get-more-done/GetMoreDone";
import laptopGuy from "../../images/guy-with-laptop.svg";
import "./landingpage.css";

const LandingPage = () => {
  return (
    <div className="landingpage">
      {/* The first section in the landingpage  */}
      {/* SECTION - "SET A GOAL" starts */}
      <section className="sag">
        <div className="sag-container1">
          <h1 className="landingpage-topic">Set a GOAL <br /> and achieve it.</h1>
          <p className="sag-text">Simple & Straight forward to-do management tool based on what really matters the most. Your goals. </p>

          <div className="sag-btn">
            <a className="sagbtn sagtry" href="/">Try for free </a>
            <a className="sagbtn" href="/">Learn More</a>
          </div>

        </div>
        <div className="sag-container2">
          <img className="landingpage-img" src={laptopGuy} alt="guy with a laptop" />

        </div>


      </section>
      {/* SECTION - "SET A GOAL" ends*/}

      <GetMoreDone />

      {/* The last section in the landingpage  */}
      {/* SECTION - "SATISFYING OVER 1B" starts*/}
      <section className="so1b">
        <div className="so1b-topcontainer">
          <h3 className="so1b-branch">GET MORE DONE</h3>
          <h1 className="so1b-headline">Satisfying over 1 billion users.</h1>
          {/* <span className="so1b-subheadline"> */}
          <div className="getMoreDone-section-text">
            Your to-do lists are automatically sorted into Today, Upcoming and
            custom Filter views to help you focus on achieving your goals.
            {/* </span> */}
          </div>
        </div>
        <div className="so1b-bottomcontainer">
          <div className="so1b-BCcontainer">
            <div className="so1b-user">
              <i className="fas fa-user"></i>
              <h2 className="username">Courty Henry</h2>
              <span className="userjob">Marketing Cordinator</span>
            </div>
            <div className="so1b-text">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, officiis ex ab dolor earum suscipit, amet impedit
                atque officia nobis cupiditate fuga reiciendis nemo? Hic
                sapiente asperiores nemo aspernatur doloremque.
              </p>
            </div>
            <div className="so1b-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          <div className="so1b-BCcontainer javascript">
            <div className="so1b-user">
              <i className="fas fa-user"></i>
              <h2 className="username">Courty Henry</h2>
              <span className="userjob">Marketing Cordinator</span>
            </div>
            <div className="so1b-text">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, officiis ex ab dolor earum suscipit, amet impedit
                atque officia nobis cupiditate fuga reiciendis nemo? Hic
                sapiente asperiores nemo aspernatur doloremque.
              </p>
            </div>
            <div className="so1b-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION - "SATISFYING OVER 1B" ends*/}
    </div>
  );
};

export default LandingPage;

// fevil was here
