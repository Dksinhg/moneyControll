import React from 'react';
import { MdLockOutline } from "react-icons/md";
import { FaExplosion } from "react-icons/fa6";
import { RiShakeHandsLine } from "react-icons/ri";
import servicePic from "../../Assest/img/female-psychiatrist-talking-with-patient-and-showi-2021-09-03-14-11-19-35TG52D.jpg";


const Services = () => {
    return (
        <>
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
        </>
    );
}

export default Services;