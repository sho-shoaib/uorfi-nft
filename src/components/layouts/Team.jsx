import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper";

const Team = (props) => {
  const data = props.data;

  return (
    <section className='tf-section team' id='team'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='block-text center'>
              <h1
                className='heading-bg'
                data-aos='fade-in'
                data-aos-duration='1000'
              >
                <span>Team</span>
              </h1>
              <h5
                className='sub-title mb-10'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                TEAM
              </h5>
              <h3
                className='title mb-28'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                Conceptualized and Marketed <br /> By our Amazing <br />{" "}
                Rebillion NFT Team
              </h3>
            </div>
          </div>
        </div>
        <div className='row mt-53'>
          <div className='col-md-12'>
            <Swiper
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 4,
                },
              }}
              scrollbar={{ draggable: true }}
            >
              {data.slice(0, 6).map((data, index) => (
                <SwiperSlide key={index}>
                  <div className='team-box'>
                    <div className='img-team'>
                      <img src={data.img} alt='Monteno' />
                      <div className='social'>
                        <p>
                          <a>
                            <i className='fab fa-facebook-square'></i>
                          </a>
                          <a>
                            <i className='fab fa-twitter-square'></i>
                          </a>
                          <a>
                            <i className='fab fa-telegram'></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className='team-info'>
                      <a className='h5'>{data.name}</a>
                      <p className='fs-16'>{data.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
