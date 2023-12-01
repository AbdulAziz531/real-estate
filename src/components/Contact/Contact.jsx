import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="paddings innerWidth flexCenter contact-container">
        {/* left side*/}
        <div className="flexColStart contact-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy To Contact Us </span>
          <span className="secondaryText">
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor.
          </span>
          <div className="flexColStart contactModes">
            {/* first Row*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">023 143 125 16</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* second mode*/}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">023 143 125 16</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* second Row*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">023 143 125 16</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/* fourth mode*/}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">023 143 125 16</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side*/}
        <div className="contact-right">
          <div className="image-container">
            <img src="./contact.jpg" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
