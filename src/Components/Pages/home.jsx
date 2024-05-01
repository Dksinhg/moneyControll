import React from "react";
import "./style.css";
import "../../response.css"
import aboutPic from "../../Assest/img/OUR-PURPOSE.webp";
import servicePic from "../../Assest/img/female-psychiatrist-talking-with-patient-and-showi-2021-09-03-14-11-19-35TG52D.jpg";
import fincial from "../../Assest/img/Financial-Planning.webp";
import HowWeWork from "../../Assest/img/how-do-we-work.webp";
import { MdLockOutline } from "react-icons/md";
import { FaExplosion } from "react-icons/fa6";
import { RiShakeHandsLine } from "react-icons/ri";
import { HiDocumentSearch } from "react-icons/hi";
import { FaFileInvoiceDollar } from "react-icons/fa6";

const home = () => {
  return (
    <>
      <section className="carousel">
        <div className="Parent_carousel">
          <div className="child_carousel">
            <h1>Small Investment Big Returns</h1>
            <p>
              Tap into the world’s market and explore endless trading
              opportunities with us and Set aside financial worry. Delivered
              greater returns with 100% Capital Preservation
            </p>
            <div className="carousel_button">
              <button>Discover more </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="card">
        <div className="sub_card">
          <div>
            <div>
              <span id="icannn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  id="icccan1"
                >
                  <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
                </svg>
              </span>
              <h2 id="_50000">Rs. 50.000</h2>
              <p id="mini">minimun Investment</p>
            </div>
          </div>
        </div>
        <div className="sub_card">
          <div>
            <div>
              <span id="icannn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  id="icccan"
                >
                  <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
                </svg>
              </span>
              <h2 id="_50000"> 1000+</h2>
              <p id="mini">investor community</p>
            </div>
          </div>
        </div>
        <div className="sub_card">
          <div>
            <div></div>
            <span id="icannn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                id="icccan"
              >
                <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" />
              </svg>
            </span>
            <h2 id="_50000">7+</h2>
            <p id="mini">Year of experience </p>
          </div>
        </div>
      </section> */}

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
          <p id="testtt1">Our Services</p>
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
        <div className="main-button">
          <div className="child-button">
            <button id="view-button">VIEW MORE</button>
          </div>
        </div>
      </section>

      <section className="Howwork">
        <div className="Sub_howwork">
          <div className="sub_howwrokimg">
            <img src={HowWeWork} alt="" />
          </div>
        </div>
        <div className="Sub_howwork">
          <p id="pp22">How We work</p>
          <h3>3 Steps For Financial Freedom</h3>
          <div className="card_howwork">
            <div className="sub_cardHowWork">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </div>
            <div className="sub_cardHowWork">
              <h3>Investment Contract</h3>
              <p>
                An investment agreement will set out the company's T&C and
                warranties to the investor in return for the Investment.
              </p>
            </div>
          </div>
          <div className="card_howwork">
            <div className="sub_cardHowWork">
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              </span>
            </div>
            <div className="sub_cardHowWork">
              <h3>Investment Contract</h3>
              <p>
                An investment agreement will set out the company's T&C and
                warranties to the investor in return for the Investment.
              </p>
            </div>
          </div>
          <div className="card_howwork">
            <div className="sub_cardHowWork">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
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
        <p id="testtt1">Testimonials</p>
        <h1 id="testtt">What Our Client Says</h1>
        <div className="review-cointainer">
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
        </div>
      </section>
    </>
  );
};

export default home;
