'use client';
import React from "react";
import Image from "next/image";
import lastImg from "../Images/pot.png";

const handleButtonClick = () => {
  window.location.href = "mailto:labimurati25@gmail.com";
};

const Together = () => {
  return (
    <section className="work">
      <div id="together" className="work__container container bg-customBackground p-3 rounded-lg flex flex-1 h-[296px] overflow-hidden">
        <div className="work__together flex flex-col justify-center items-center p-3">
          <div className="work__information">
            <h2 className="text-xl text-white">Let&apos;s Work Together</h2>
            <p className="text-sm">
              Now that you&apos;ve come this far, let&apos;s work together on your next
              website
            </p>
            <div className="work__btn flex gap-4 pt-4">
              <button
                className="service__button-primary text-white bg-customButtonbg p-3 rounded-lg border"
                onClick={handleButtonClick}
              >
                Get in Touch
              </button>
              <span className="flex gap-1 items-center">
                Or press
                <span className="bg-customGray text-white p-3 rounded border border-customBorder text-sm mx-px">
                  S
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="work__img relative top-9 transition-transform duration-500 ease-in-out">
          <Image
            className="rounded-l"
            src={lastImg}
            width={700}
            height={250}
            alt="Booking Icon"
          />
        </div>
      </div>
    </section>
  );
};

export default Together;
