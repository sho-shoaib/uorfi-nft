import React from "react";
import CountUp from "react-countup";

const CounterTwo = () => {
  return (
    <section
      className='tf-section section-counter'
      id='counter'
      style={{ paddingTop: "200px" }}
    >
      <div className='block-text center'>
        <h1 className='heading-bg' data-aos='fade-in' data-aos-duration='1000'>
          <span>SOCIALS</span>
        </h1>
        <h5
          className='sub-title mb-10'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          Socials
        </h5>
        <h3 className='title mb-37' data-aos='fade-up' data-aos-duration='1000'>
          Uorfi Javed's <br /> Social Media Following
        </h3>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div
              className='counter__body'
              data-aos='fade-down'
              data-aos-duration='1000'
            >
              <a
                className='counter'
                href='https://www.instagram.com/urf7i/'
                target='_blank'
              >
                <i
                  className='fab fa-instagram fa-5x'
                  style={{ color: "#F65432" }}
                ></i>
                <div className='number-counter' style={{ color: "#200B6A" }}>
                  <CountUp start={1.0} end={3.2} decimals={1} duration={0.7} />M
                </div>
                <h5 className='title'>Instagram</h5>
              </a>
              <a
                className='counter'
                href='https://www.facebook.com/OfficialUrf7i'
                target='_blank'
              >
                <i
                  className='fab fa-facebook fa-5x'
                  style={{ color: "#F65432" }}
                ></i>
                <div className='number-counter' style={{ color: "#200B6A" }}>
                  <CountUp start={1} end={582} duration={0.7} />K
                </div>
                <h5 className='title'>Facebook</h5>
              </a>
              <a
                className='counter'
                href='https://www.facebook.com/OfficialUrf7i'
                target='_blank'
              >
                <i
                  className='fab fa-twitter fa-5x'
                  style={{ color: "#F65432" }}
                ></i>
                <div className='number-counter' style={{ color: "#200B6A" }}>
                  <CountUp start={1.0} end={10.0} decimals={1} duration={0.7} />
                  B
                </div>
                <h5 className='title'>Twitter</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterTwo;
