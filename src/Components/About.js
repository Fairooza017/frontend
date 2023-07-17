import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <h1 className="justify-content-center">About Us</h1>
      <div className="accordion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="One">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              TastyBites
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="One"
          >
            <div className="accodion-body">
              <h4>
                Welcome to TastyBites, a delicious and innovative food
                organization that aims to tantalize your taste buds and satisfy
                your culinary desires. At TastyBites, we believe that food is
                not just a necessity; it's an experience that brings joy and
                happiness to people's lives.
              </h4>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="two">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsetwo"
            >
              Address
            </button>
          </h2>
          <div
            id="collapsetwo"
            className="accordion-collapse collapse show"
            aria-labelledby="two"
          >
            <div className="accodion-body">
              <h2>123 Main Street, Cityville, Country</h2>
              <br></br>
              <h2>Italy</h2>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="three">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsethree"
            >
              Contact Details
            </button>
          </h2>
          <div
            id="collapsethree"
            className="accordion-collapse collapse show"
            aria-labelledby="three"
          >
            <div className="accodion-body">
              <li>Email: info@tastybites.com</li>
              <li>Phone: +1 (XXX) XXX-XXXX</li>
              <li> Website: www.tastybites.com</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
