import React from "react";
import todo from "../../../images/todo.svg";
import laptopGuy from "../../../images/guy-with-laptop.svg";

import { FiUploadCloud, FiWatch, FiYoutube } from "react-icons/fi";

import { IoSearchOutline } from "react-icons/io5";

import "./GetMoreDone.css";

const GetMoreDone = () => {
  return (
    <div className="getMoreDone">
      <div className="getMoreDone-section addTask">
        <div className="addTask-left">
          <div className="getMoreDone-section-label">Get More Done</div>
          <div className="getMoreDone-section-header">
            Add your tasks.
            <br /> Organize your life.
            <br />
            Achieve more every day
          </div>
          <div className="getMoreDone-section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            sagittis ullamcorper leo, adipiscing. Tortor vel at egestas tellus
            odio tristique aenean adipiscing sit. Dolor enim arcu.
          </div>
        </div>
        <div className="addTask-right">
          <img className="todotask-img" src={todo} alt="task" />
        </div>
      </div>
      <div className="getMoreDone-section mentalClarity">
        <div className="mentalClarity-left">
          <img className="todolaptop-img" src={laptopGuy} alt="guy with a laptop" />
        </div>
        <div className="mentalClarity-right">
          <div className="getMoreDone-section-label">Get More Done</div>
          <div className="getMoreDone-section-header">
            Reach that mental clarity you’ve been longing for.
          </div>
          <div className="getMoreDone-section-text">
            Your to-do lists are automatically sorted into Today, Upcoming and
            custom Filter views to help you focus on your most important things.
          </div>
        </div>
      </div>
      <div className="whyWeAreTheBest">
        <div className="getMoreDone-section">
          <div className="getMoreDone-section-label">Get More Done</div>
          <div className="getMoreDone-section-header">Why we are the best</div>
          <div className="getMoreDone-section-text">
            Your to-do lists are automatically sorted into Today, Upcoming and custom Filter views to help you focus on achieving your goals
          </div>
        </div>
      </div>

      <div className="getMoreDone-cardsSection">
        <div className="getMoreDone-card">
          <div className="getMoreDone-card-icon">
            <FiUploadCloud />
          </div>
          <div className="getMoreDone-card-header">Et, odio elementum</div>
          <div className="getMoreDone-card-text">
            Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus
            mattis
          </div>
        </div>
        <div className="getMoreDone-card">
          <div className="getMoreDone-card-icon">
            <FiWatch />
          </div>
          <div className="getMoreDone-card-header">Massa leo scelerisque</div>
          <div className="getMoreDone-card-text">
            Velit nulla eu tortor elit sed. Volutpat ornare mi tempor, hac morbi
            faucibus.
          </div>
        </div>
        <div className="getMoreDone-card">
          <div className="getMoreDone-card-icon">
            <FiYoutube />
          </div>
          <div className="getMoreDone-card-header">Phasellus non sit</div>
          <div className="getMoreDone-card-text">
            Lobortis adipiscing sit senectus id. Rhoncus lacus mi aliquam tortor
            nibh.
          </div>
        </div>
        <div className="getMoreDone-card">
          <div className="getMoreDone-card-icon">
            <FiUploadCloud />
          </div>
          <div className="getMoreDone-card-header">Enim scelerisque dictum</div>
          <div className="getMoreDone-card-text">
            Turpis eget ut sed vitae in sapien egestas ultrices feugiat.
            Elementum
          </div>
        </div>
        <div className="getMoreDone-card">
          <div className="getMoreDone-card-icon">
            <FiUploadCloud />
          </div>
          <div className="getMoreDone-card-header">Vulputate et enim</div>
          <div className="getMoreDone-card-text">
            Amet, eros nisl vestibulum tincidunt pellentesque. Congue id sapien
            dictum a.
          </div>
        </div>
        <div className="getMoreDone-card">
          <div className="getMoreDone-card-icon">
            <IoSearchOutline />
          </div>
          <div className="getMoreDone-card-header">Faucibus eget blandit</div>
          <div className="getMoreDone-card-text">
            Tristique viverra lorem nibh eget tellus eget morbi porttitor.
            Faucibus sit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMoreDone;
