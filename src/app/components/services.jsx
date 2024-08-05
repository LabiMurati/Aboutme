"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import bookingIcon from "../Images/person.png";
import graduationIcon from "../Images/icons8-bildung-50.png";
import AOS from "aos";
import "aos/dist/aos.css";



const Service = ({ title, anothertitle, description }) => (
  <div id="service" className="section">
    <div className="service__icon flex  justify-start items-center pb-3">
      <div className="service__modal bg-customBackground p-3 rounded-lg flex">
        <Image src={bookingIcon} width={50} height={50} alt="Booking Icon" />
        <h2 className="service__title text-lg ml-3 content-center">{title}</h2>
      </div>
    </div>
    <div className="service__information">
      <div className="service__information-content">
        <h2 className="description--modd">{anothertitle}</h2>
        <p className="service__description text-sm text-customColor">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div
    id="service"
    className="services"
    data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"
  >
    <div className="services__holder mt-8 mb-8 flex justify-center flex-col items-center container">
      <div className="services__header w-full flex flex-col items-center text-center">
        <div className="services__header-icon mt-10">
          <Image src={graduationIcon} width={40} height={40} alt="Light Icon" />
        </div>
        <div className="services__header-title">
          <h2 className="text-xl text-white">Education</h2>
        </div>
      </div>
      <div className="services__box-holder">
        <div className="services__box mt-5 bg-customBackground p-[20px] rounded-lg md:w-[700px] mb-5">
          <Service
            title="Academic High School in Natural Sciences"
            anothertitle="Kuvendi i Lezhes, Viti"
            description="During my time at UBT, I gained comprehensive knowledge in software engineering principles,
            focusing on both theoretical foundations and practical applications. Key courses included Data
            Structures and Algorithms, Web Development, Database Management, and Software Project
            Management. "
          />
        </div>
        <div className="services__box mt-5 bg-customBackground p-[20px] rounded-lg md:w-[700px] mb-5">
          <Service
            title="BSc in Software Engineering, Computer Science and Engineering"
            anothertitle="University of Business and Technology(UBT), Prishtina"
            description="During my time at UBT, I gained comprehensive knowledge in software engineering principles,
            focusing on both theoretical foundations and practical applications. Key courses included Data
            Structures and Algorithms, Web Development, Database Management, and Software Project
            Management. "
          />
        </div>
      </div>
    </div>
  </div>
);

const ServicesWithAOS = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Services />;
};

export default ServicesWithAOS;
