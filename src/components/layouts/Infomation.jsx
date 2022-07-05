import React, { useState } from "react";
import icon from "../../assets/fake-data/icon";

const Infomation = () => {
  const [data] = useState([
    {
      icon: icon.user,
      title: "Name :",
      info: "Uorfi NFTs",
    },
    {
      icon: icon.trading,
      title: "Platforms :",
      info: "Wazirx, Opensea, Foundation",
    },
    {
      icon: icon.box,
      title: "Total Supply :",
      info: "5000 NFTs",
    },
    {
      icon: icon.payment,
      title: "Floor Price ",
      info: "0.21 bnb",
    },
  ]);
  const [datatext] = useState({
    subtitle: "NFT Information",
    title: "Here’s what you need to know about NFT",
    desc1:
      "This collection has collaborated with NGOs pan India and will contribute revenue to women's safety, also all the non-fungible tokens hold utilities and perks.",
  });
  return (
    <section className='tf-section section-info' id='info'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-7 col-md-12'>
            <div className='block-text pt-12'>
              <h5
                className='sub-title mb-10'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                {datatext.subtitle}
              </h5>
              <h3
                className='title mb-26'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                {datatext.title}
              </h3>
              <p
                className='fs-21 mb-50'
                data-aos='fade-up'
                data-aos-duration='1000'
                style={{ textAlign: "justify" }}
              >
                {datatext.desc1}
              </p>
              <a
                className='btn-action style-2'
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                Buy NFT
              </a>
            </div>
          </div>
          <div className='col-xl-5 col-md-12'>
            <div
              className='box-info'
              data-aos='zoom-in'
              data-aos-duration='2000'
            >
              <ul>
                {data.map((data, index) => (
                  <li
                    key={index}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5 className='fs-18'>
                      <img
                        src={data.icon}
                        alt='Monteno'
                        style={{ width: "20px" }}
                      />{" "}
                      {data.title}
                    </h5>
                    <p
                      className='fs-16'
                      style={{ display: "inline-block", textAlign: "right" }}
                    >
                      {data.info}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infomation;
