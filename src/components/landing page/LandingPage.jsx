import React from "react";
import GetMoreDone from "./get-more-done/GetMoreDone";
import "./landingpage.css";

const LandingPage = () => {
  return (
    <div className="landingpage">

      <GetMoreDone />
      {/* The last section in the landingpage  */}
      {/* SECTION - "SATISFYING OVER 1B" starts*/}
      <section className="so1b">
        <div className="so1b-topcontainer">
          <h3 className="so1b-branch">GET MORE DONE</h3>
          <h1 className="so1b-headline">Satisfying over 1 billion users.</h1>
          <span className="so1b-subheadline">
            Your to-do lists are automatically sorted into Today, Upcoming and
            custom Filter views to help you focus on achieving your goals.
          </span>
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
