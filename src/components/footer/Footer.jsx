import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='footer__body'>
              <ul className='social'>
                <li data-aos='fade-up' data-aos-duration='1400'>
                  <a href='https://www.instagram.com/urf7i/' target='_blank'>
                    <i
                      className='fab fa-instagram'
                      style={{ color: "white" }}
                    ></i>
                  </a>
                </li>
                <li data-aos='fade-up' data-aos-duration='1000'>
                  <a href='https://discord.gg/QruPReCh' target='_blank'>
                    <i
                      className='fab fa-discord'
                      style={{ color: "white" }}
                    ></i>
                  </a>
                </li>
                <li data-aos='fade-up' data-aos-duration='1000'>
                  <a href='https://twitter.com/urfeaslam' target='_blank'>
                    <i
                      className='fab fa-twitter'
                      style={{ color: "white" }}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='footer_bottom'>
              <p className='fs-16'>Copyright Rebillion - NFT © 2022</p>
              <ul>
                <li>
                  <Link to='#'>Terms & Condition</Link>
                </li>
                <li>
                  <Link to='#'>Privacy Policy</Link>
                </li>
                <li>
                  <Link to='#'>Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {isVisible && <Link onClick={scrollToTop} to='#' id='scroll-top'></Link>}
    </>
  );
};

export default Footer;
