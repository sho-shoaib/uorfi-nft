import React from "react";
import dataFaq from "../assets/fake-data/data-faq";
import dataMontono from "../assets/fake-data/data-montono";
import roadMap from "../assets/fake-data/data-roadmap2";
import utilities from "../assets/fake-data/data-roadmap";
import dataTeam from "../assets/fake-data/data-team";
import Footer from "../components/footer/Footer";
import HeaderOnePage from "../components/header/HeaderOnePage";
import AboutTwo from "../components/layouts/AboutTwo";
import CounterTwo from "../components/layouts/CounterTwo";
import FAQ3 from "../components/layouts/FAQ3";
import Infomation from "../components/layouts/Infomation";
import Montono2 from "../components/layouts/Montono2";
import Newsletter from "../components/layouts/Newsletter";
import RoadMap from "../components/layouts/RoadMap";
import RoadMap2 from "../components/layouts/RoadMap2";
import Team from "../components/layouts/Team";
import SliderOne from "../components/slider/SliderOne";
import Speciality from "../components/layouts/Speciality";
import dataCard from "../assets/fake-data/data-card";

const HomeOnePage = () => {
  return (
    <div className='home-3 one-page'>
      <HeaderOnePage />
      <SliderOne />
      <AboutTwo />
      <Speciality data={dataCard} />
      <Infomation />
      <RoadMap data={utilities} />
      <RoadMap2 data={roadMap} />
      <CounterTwo />
      <Montono2 data={dataMontono} />
      <Team data={dataTeam} />
      <FAQ3 data={dataFaq} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomeOnePage;
