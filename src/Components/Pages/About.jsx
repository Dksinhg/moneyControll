import React from "react";
import aboutPic from "../../Assest/img/OUR-PURPOSE.webp";
import "./style.css";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="aboutus">
          <img src={aboutPic} alt="" />
        </div>
        <div className="aboutus">
          <p className="About">About Us</p>
          <div className="purpose">
            <h1 className="ourpurpose">OUR PURPOSE</h1>
            <p className="desc">
              Money Wealth has developed dramatically in terms of customer base
              and company to generate constant and maximum profits from the
              stock market, both in the falling and increasing markets, as well
              as from the non-linked market. Establishing a business
              relationship with top brokers in India. It provides its clients
              with a variety of investment alternatives, as well as investment
              programs.
            </p>
          </div>
        
        <div className="know-more">
        <button>KNOW MORE</button>
        </div>
        </div>
      </section>
    </>
  );
};

export default About;
