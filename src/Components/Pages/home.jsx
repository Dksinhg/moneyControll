import React from "react";
import "./style.css";
import aboutPic from "../../Assest/img/OUR-PURPOSE.webp";
import servicePic from "../../Assest/img/female-psychiatrist-talking-with-patient-and-showi-2021-09-03-14-11-19-35TG52D.jpg";
import fincial from "../../Assest/img/Financial-Planning.webp";
import HowWeWork from "../../Assest/img/how-do-we-work.webp";
import { MdLockOutline } from "react-icons/md";
import { FaExplosion } from "react-icons/fa6";
import { RiShakeHandsLine } from "react-icons/ri";

const home = () => {
  return (
    <>
      <section className="carousel">
        <h1>Small Investment Big Returns</h1>
        <p>
          Tap into the world’s market and explore endless trading opportunities
          with us and Set aside financial worry. Delivered greater returns with
          100% Capital Preservation
        </p>
        <div className="carousel_button">
          <button>Discover more </button>
        </div>
      </section>

      <section className="card">
        <div className="sub_card">
          <span>ican</span>
          <h2>Rs. 50.000</h2>
          <p>minimun</p>
        </div>
        <div className="sub_card">
          <span>ican</span>
          <h2> 1000+</h2>
          <p>investor community</p>
        </div>
        <div className="sub_card">
          <span>ican</span>
          <h2>7+</h2>
          <p>Year of experience </p>
        </div>
      </section>

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
          <button>KNOW MORE</button>
        </div>
      </section>

      <section className="services">
        <div className="card_services">
          <h1 className="services_heading"> Our Services</h1>
          <p id="desc">
            The outcomes lead to trust. Only visible results will allow you to
            gain the trust of over 1000+ clients. The outcomes that we have
            achieved for our clients in terms of financial independence.{" "}
          </p>
          <div className="subCard_services">
            <div className="subcard_details">
              <span className="desc_ican">
                {" "}
                <MdLockOutline />{" "}
              </span>
              <div className="subcard_desc">
                <h4>Principal Amount Secured</h4>
                <p id="descp">
                  What sets us apart from the competition is that we keep your
                  principal amount secure. Our objective is to provide our
                  clients with the highest possible returns while protecting
                  their investments.
                </p>
              </div>
            </div>
            <div className="subcard_details">
              <span className="desc_ican">
                {" "}
                <FaExplosion />{" "}
              </span>
              <div className="subcard_desc">
                <h4>Extensive Experience</h4>
                <p id="descp">
                  What sets us apart from the competition is that we keep your
                  principal amount secure. Our objective is to provide our
                  clients with the highest possible returns while protecting
                  their investments.
                </p>
              </div>
            </div>
            <div className="subcard_details">
              <span className="desc_ican">
                <RiShakeHandsLine />
              </span>
              <div className="subcard_desc">
                <h4>One-Click Assistance</h4>
                <p id="descp">
                  What sets us apart from the competition is that we keep your
                  principal amount secure. Our objective is to provide our
                  clients with the highest possible returns while protecting
                  their investments.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card_services">
          <img src={servicePic} alt="" />
        </div>
      </section>

      <section className="wordmap">
        <div className="subword">
          <div className="heading">
            <h1>Money wealth </h1>
            <p>Why choose Us</p>
          </div>
          <div className="para">
            <p id="DESC">
              Trust follows the results. Achieving the trust of over 2000+
              clients is possible only when you have visible results. The
              results with which we have bought financial freedom to our
              clients.
            </p>
          </div>
          <div className="score">
            <spna className="rank">
              <h1 className="rank_score"> 2K+</h1>
              <p>Clients</p>
            </spna>

            <spna className="rank">
              <h1> 25Cr+</h1>
              <p>Profile</p>
            </spna>

            <spna className="rank">
              <h1> 17k+</h1>
              <p>Visitor</p>
            </spna>

            <spna className="rank">
              <h1> 7+</h1>
              <p>Year of Investment Experience</p>
            </spna>
          </div>
        </div>
      </section>

      <section className="ourservices">
        <div className="heading">
          <p>Our Services</p>
          <h1> We Ensure Professional Services </h1>
        </div>
        <div className="servercard">
          <div className="Sub2_seervercard">
            <div className="Sub_servicesCard">
              <img src={fincial} alt="" />
              <h2>Financial Planning</h2>
              <span>Let's Enquiry</span>
            </div>
            <div className="Sub_servicesCard">
              <img src={fincial} alt="" />
              <h2>Saving & Investments</h2>
              <span>Let's Enquiry</span>
            </div>
            <div className="Sub_servicesCard">
              <img src={fincial} alt="" />
              <h2>Technology Advisory</h2>
              <span>Let's Enquiry</span>
            </div>
            <div className="Sub_servicesCard">
              <img src={fincial} alt="" />
              <h2>Business Consultant</h2>
              <span>Let's Enquiry</span>
            </div>
            <div className="Sub_servicesCard">
              <img src={fincial} alt="" />
              <h2>Insurance & Health Planning</h2>
              <span>Let's Enquiry</span>
            </div>
            <div className="Sub_servicesCard">
              <img src={fincial} alt="" />
              <h2>Insurance & Health Planning</h2>
              <span>Let's Enquiry</span>
            </div>
          </div>
        </div>
        <button>VIEW MORE</button>
      </section>

      <section className="Howwork">
        <div className="Sub_howwork">
          <img src={HowWeWork} alt="" />
        </div>
        <div className="Sub_howwork">
          <p>How We work</p>
          <h3>3 Steps For Financial Freedom</h3>
          <div className="card_howwork">
            <div className="sub_cardHowWork">ican</div>
            <div className="sub_cardHowWork">
              <h3>Investment Contract</h3>
              <p>
                An investment agreement will set out the company's T&C and
                warranties to the investor in return for the Investment.
              </p>
            </div>
          </div>
          <div className="card_howwork">
            <div className="sub_cardHowWork">ican</div>
            <div className="sub_cardHowWork">
              <h3>Investment Contract</h3>
              <p>
                An investment agreement will set out the company's T&C and
                warranties to the investor in return for the Investment.
              </p>
            </div>
          </div>
          <div className="card_howwork">
            <div className="sub_cardHowWork">ican</div>
            <div className="sub_cardHowWork">
              <h3>Investment Contract</h3>
              <p>
                An investment agreement will set out the company's T&C and
                warranties to the investor in return for the Investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ClientSays">
        <p>Testimonials</p>
        <h1>What Our Client Says</h1>
        <div className="Card_client">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            delectus saepe perferendis sequi, doloremque maiores! Eius, animi
            tenetur explicabo in eaque quis, ipsum hic quo dolorum minima quas
            excepturi ex.
          </p>
          <h3>Ankit Yadav</h3>
          <p>Customer Representative</p>
        </div>
        <div className="Card_client">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            delectus saepe perferendis sequi, doloremque maiores! Eius, animi
            tenetur explicabo in eaque quis, ipsum hic quo dolorum minima quas
            excepturi ex.
          </p>
          <h3>Ankit Yadav</h3>
          <p>Customer Representative</p>
        </div>
        <div className="Card_client">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            delectus saepe perferendis sequi, doloremque maiores! Eius, animi
            tenetur explicabo in eaque quis, ipsum hic quo dolorum minima quas
            excepturi ex.
          </p>
          <h3>Ankit Yadav</h3>
          <p>Customer Representative</p>
        </div>
      </section>
    </>
  );
};

export default home;
