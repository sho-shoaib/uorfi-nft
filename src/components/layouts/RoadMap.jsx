import React from "react";

const RoadMap = (props) => {
  const data = props.data;

  return (
    <section
      className='tf-section road-map'
      id='utilities'
      style={{ paddingTop: "150px" }}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='block-text center'>
              <h1
                className='heading-bg'
                data-aos='fade-in'
                data-aos-duration='1000'
              >
                <span>UTILITIES</span>
              </h1>
              <h5
                className='sub-title mb-10'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Road Map? NO!
              </h5>
              <h3
                className='title mb-28'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Upfront Utilities
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='road-map__content s1'>
              {data.map((data, index) => (
                <div
                  key={index}
                  className={`box-time ${data.class} text-white`}
                  data-aos='fade-in'
                >
                  <span data-aos='zoom-in' data-aos-offset='300'>
                    <i className='fa fa-check'></i>
                  </span>
                  <p className='fs-16 color-main mb-0'>{data.time}</p>
                  <h5
                    className='title mb-20 text-orange-600'
                    style={{ color: "#FD562A" }}
                  >
                    {data.title}
                  </h5>
                  <p className='fs-18'>{data.desc} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
