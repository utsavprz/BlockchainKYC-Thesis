import React, { useState } from "react";
import "../styles/home.css";
import homeBackground from "../images/homeBackground.png";
import bannerImg from "../images/bannerImg.png";
import astrick from "../images/astrick2.png";
import Navbar from "./navbar";

import { useHistory } from "react-router-dom";

function Home() {
  const topSectionStyles = {
    backgroundImage: `url(${homeBackground})`,
    backgroundSize: "cover",
    height: "100vh",
  };
  const [showOverlay, setShowOverlay] = useState(false);

  const handleGetStartedClick = () => {
    setShowOverlay(true);
  };
  const handleCloseOverlayClick = () => {
    setShowOverlay(false);
  };


  const history = useHistory();

  const handleCustomerClick = () => {
    history.push("/customer");
  };

  const handleOrganizationClick = () => {
    history.push("/organization");
  };
  return (
    <div>
      <section style={topSectionStyles}>
        <Navbar />

        {/* Hero section */}
        <section className="hero">
          <div>
            <div className="htd">
              <img src={astrick} />
              <h3 className="hero-text1">
                Decentralized KYC verification platform built on Ethereum
                network individuals and businesses to verify their identities.
              </h3>
            </div>
            <h1 className="hero-title">
              <span
                className="htspan"
                style={{
                  color: "#161c34",
                  textShadow:
                    "0.3px 0.3px 0 white, -0.3px -0.3px 0 white, 0.3px -0.3px 0 white, -0.3px 0.3px 0 white",
                  fontSize: "115px",
                }}
              >
                Towards
              </span>{" "}
              a new era{" "}
              <span className="htof" style={{ fontSize: "55px" }}>
                of
              </span>{" "}
              <span
                style={{
                  color: "#161c34",
                  textShadow:
                    "0.3px 0.3px 0 white, -0.3px -0.3px 0 white, 0.3px -0.3px 0 white, -0.3px 0.3px 0 white",
                  fontSize: "100px",
                }}
                className="htspan"
              >
                <br />
                Identity
              </span>{" "}
              verification
            </h1>

            <a
              href="javascript:;"
              className="getStarted-btn"
              onClick={handleGetStartedClick}
            >
              <span className="btn__circle"></span>
              <span className="btn__white-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="icon-arrow-right"
                  viewBox="0 0 21 12"
                >
                  <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
                </svg>
              </span>
              <span className="btn__text">Get Started</span>
            </a>

            {showOverlay && (
              <div className="overlay">
                <div className="close-btn" onClick={handleCloseOverlayClick}>
                  &#x2716; {/* Cross icon (Unicode) */}
                </div>
                <div className="centered-column">
                <button onClick={handleCustomerClick}>Customer</button>
      <button onClick={handleOrganizationClick}>Organization</button>
                </div>
              </div>
            )}
          </div>
          {/* <img className="hero-image" src={bannerImg} alt="hero" /> */}
          <div className="scrolldown">
            <div className="chevrons">
              <div className="chevrondown"></div>
              <div className="chevrondown"></div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className="hs-2">
          <div className="col">
            <h2 className="hero-text">Secure KYC Verification</h2>
            <div className="circle-icon">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <p className="description">
              Our blockchain-based KYC verification process ensures that your
              personal information is kept safe and secure.
            </p>
          </div>
          <div className="col">
            <h2 className="hero-text">Lightning-Fast KYC Verification</h2>
            <div className="circle-icon">
              <span className="material-symbols-outlined">avg_time</span>
            </div>
            <p className="description">
              With our blockchain technology, KYC verification can be completed
              in a matter of minutes instead of days, saving you valuable time.
            </p>
          </div>
          <div className="col">
            <h2 className="hero-text">Transparent KYC Verification</h2>
            <div className="circle-icon">
              <span className="material-symbols-outlined">shield</span>
            </div>
            <p className="description">
              Our blockchain ledger provides a tamper-proof record of your KYC
              verification, ensuring transparency and accountability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
