import React, { useState } from "react";

const Speciality = (props) => {
  const [datatext] = useState({
    subtitle: "NFT Segregation by numbers",
    title: "We have devided the NFT collection to 4 exciting segments!",
    desc: "",
  });

  const data = props.data;

  return (
    <section
      className='tf-section section-speciality'
      style={{ paddingTop: "158px" }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-xl-5 col-md-12'>
            <div className='block-text pt-128 pd-0'>
              <h5
                className='sub-title mb-10'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                {datatext.subtitle}
              </h5>
              <h3
                className='title mb-28'
                data-aos='fade-up'
                data-aos-duration='1000'
                style={{ textAlign: "left" }}
              >
                {datatext.title}
              </h3>
              <p className='fs-21' data-aos='fade-up' data-aos-duration='1000'>
                {datatext.desc}
              </p>
            </div>
          </div>
          <div className='col-xl-7 col-md-12'>
            <div className='section-speciality__box'>
              {data.map((data, index) => (
                <div
                  key={index}
                  className={`box-item bg-2 ${data.class}`}
                  data-aos='flip-left'
                  style={{ cursor: "auto" }}
                >
                  <h3 className='color-main'>{data.stt}</h3>
                  <h5 className='h5 text-white'>{data.title}</h5>
                  <p>{data.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
