import React, { useState } from "react";

import item from "../../assets/fake-data/item";

const AboutTwo = () => {
  const [data] = useState({
    subtitle: "About Us",
    title: "High Quality NFT Collection",
    desc1:
      "Uorfi NFT is an initiative for women's protection through the power of blockchain technology. There are 5000 unique artworks out of a million possibilities which will be a token of contribution to a wise cause.",
    desc2:
      "Bollywood celebrity Uorfi has been receiving death threats and bullying pressure. Rather than adjusting to that she has addressed this as a real-world problem and has taken initiative to solve it using the power of blockchain technology and NFTs.",
  });

  return (
    <section className='tf-section section-about' id='about'>
      <div className='container'>
        <div className='row reverse'>
          <div className='col-xl-7 col-md-12'>
            <div className='group-image'>
              <div className='left'>
                <div
                  className='item bg-1 big'
                  style={{ backgroundColor: "#99FFEF" }}
                >
                  <img src={item.item15} alt='Monteno' />
                </div>
              </div>
              <div className='right'>
                <div
                  className='item bg-2 small'
                  style={{ backgroundColor: "#F7EEE9" }}
                >
                  <img src={item.item16} alt='Monteno' />
                </div>
                <div
                  className='item bg-3'
                  style={{ backgroundColor: "#98ADFE" }}
                >
                  <img src={item.item17} alt='Monteno' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-5 col-md-12'>
            <div className='block-text pt-12'>
              <h5
                className='sub-title mb-10'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                {data.subtitle}
              </h5>
              <h3
                className='title mb-58'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                {data.title}
              </h3>
              <p
                className='fs-21 mb-33'
                data-aos='fade-up'
                data-aos-duration='1000'
                style={{ textAlign: "justify" }}
              >
                {data.desc1}
              </p>
              <p
                className='fs-21 mb-33'
                data-aos='fade-up'
                data-aos-duration='1000'
                style={{ textAlign: "justify" }}
              >
                {data.desc2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
