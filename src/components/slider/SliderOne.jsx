import React, { useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import item from "../../assets/fake-data/item";

const SliderOne = ({ handleOpen }) => {
  const [datatext] = useState({
    subtitle: "Uorfi's NFTs",
    title: "Join the NFT revolution",
    desc: "Uorfi NFT is an initiative for commercial blockchain utilities, making NFTs mainstream and women empowerment.",
  });

  return (
    <section className='tf-section hero-slider'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-5 col-md-6 col-12'>
            <div className='block-text pt-24'>
              <h6 className='sub-title mb-6' data-aos='fade-up'>
                {datatext.subtitle}
              </h6>
              <h2 className='title mb-26' data-aos='fade-up'>
                {datatext.title}
              </h2>
              <p
                className='fs-21 mb-33'
                style={{ textAlign: "justify" }}
                data-aos='fade-up'
              >
                {datatext.desc}
              </p>
              <a
                className='btn-action style-2'
                data-aos='fade-up'
                data-aos-duration='1200'
                onClick={handleOpen}
              >
                Get Whitelisted
              </a>
            </div>
          </div>
          <div className='col-xl-7 col-md-6 col-12'>
            <div className='content-right d-flex'>
              <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={30}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
              >
                <SwiperSlide>
                  <div className='item bg-1'>
                    <img src={item.item1} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item bg-2'>
                    <img src={item.item2} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item bg-1'>
                    <img src={item.item3} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item bg-2'>
                    <img src={item.item4} alt='Monteno' />
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={30}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  reverseDirection: true,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
              >
                <SwiperSlide>
                  <div className='item bg-2'>
                    <img src={item.item5} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item bg-1'>
                    <img src={item.item6} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item bg-2'>
                    <img src={item.item7} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item bg-1'>
                    <img src={item.item8} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item bg-2'>
                    <img src={item.item9} alt='Monteno' />
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={30}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
              >
                <SwiperSlide>
                  <div className='item bg-2'>
                    <img src={item.item10} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item bg-1'>
                    <img src={item.item11} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item bg-2'>
                    <img src={item.item12} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item bg-1'>
                    <img src={item.item13} alt='Monteno' />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='item bg-2'>
                    <img src={item.item14} alt='Monteno' />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderOne;
