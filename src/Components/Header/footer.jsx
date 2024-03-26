import React from "react";
import "./style.css";
import logo from "../../Assest/img/logo.jpg";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const footer = () => {
  return (
    <>
    <div className="Parnet-footer">
      <div className="child-footer">
      <div className="footerContainer">
        <div className="gridfooter">
          <img src={logo} alt="" style={{ width: 200 }} />
        </div>
        <div className="gridfooter">
          <h3> Navigation </h3>
          <div className="icans">
            <div className="ican_footer">
              <span id="fa">
                
                <FaCompressArrowsAlt />
              </span>
              <span>
                <span id="ican_right"> Home</span>
              </span>
            </div>
            <br></br>
            <div className="ican_footer">
              <span id="fa">
                
                <FaCompressArrowsAlt />
              </span>
              <span>
                <span id="ican_right"> About Us</span>
              </span>
            </div>
            <br />
            <div className="ican_footer">
              <span id="fa">
                
                <FaCompressArrowsAlt />
              </span>
              <span>
                <span id="ican_right"> Services</span>
              </span>
            </div>
            <br />
            <div className="ican_footer">
              <span id="fa">
                
                <FaCompressArrowsAlt />
              </span>
              <span>
                <span id="ican_right"> Contact Us</span>
              </span>
            </div>
            <br />
          </div>
        </div>
        <div className="gridfooter">
          <h3>Usrful Link</h3>
          <div className="icans">
            <div className="ican_footer">
              <span id="fa">
                <FaCompressArrowsAlt />
              </span>
              <span>
                <span id="ican_right"> Privacy Policy</span>
              </span>
            </div>
            <br></br>
            <div className="ican_footer">
              <span id="fa">
                <FaCompressArrowsAlt />
              </span>
              <span>
                <span id="ican_right">Terms And Condotions</span>
              </span>
            </div>
            <br />
            <div className="ican_footer">
              <span id="fa">
                
                <FaCompressArrowsAlt />
              </span>
              <span>
                <span id="ican_right"> Supportr</span>
              </span>
            </div>
            <br />
            <div className="ican_footer">
              <span id="fa">
                
                <FaCompressArrowsAlt />
              </span>
              <span>
                <span id="ican_right"> Support</span>
              </span>
            </div>
            <br></br>
            <div className="ican_footer">
              <span id="fa">
                <FaCompressArrowsAlt />
              </span>
              <span>
                <span id="ican_right"> Support</span>
              </span>
            </div>
          </div>
        </div>
        <div className="gridfooter">
          <h3> Get In Touch </h3>
          <div className="icans">
          <div className="ican_footer">
            <span>
              <FaMagnifyingGlassLocation />
            </span>
            <span>Office no 002, Marble Arch A-3</span>, <br></br>
            <span>Lodha Road, Mira Road, Thane</span>, ,<br />
            <span>Maharashtra - 401107</span>
          </div>
          <div>
            <span>
              <CgMail />
            </span>
            <span>
              <span> enquiry@moneywealth.in </span> <br></br>
              <span> invest@moneywealth.in</span>
            </span>
          </div>
          <div>
            <FaPhoneAlt />
            <span>+91 6200358695</span>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
     
    </>
  );
};

export default footer;
