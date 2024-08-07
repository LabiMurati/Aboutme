"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Mycv from "./mycv";
const Hero = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toLowerCase() === "s") {
        window.open("mailto:labimurati25@gmail.com");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="container  mx-auto">
      <div className="hero__holder flex flex-col gap-6">
        <div className="pt-9">
          <div className="hero__title">
            <div className="hero__title--inner text-2xl pb-2">
              <h2 className="font-bold text-white">Turning Coffee into Code.</h2>
         
            </div>

            <p className="mt-4text-customText text-lg text-white">
              I am Labinot Murati, a dedicated Front-End Developer with over 3
              years of experience in creating dynamic and user-friendly websites
              and applications. Specializing in user-centric design and
              strategic optimization, I strive to deliver solutions that exceed
              client expectations and enhance user engagement. My commitment to
              excellence and continuous learning has established me as a
              reliable partner in the digital development community. I graduated
              in Computer Science from UBT with a focus on Software Engineering,
              where I honed my skills in building scalable and innovative
            digital solutions.
            </p>
          </div>
        </div>
        <Mycv />
        <span className="flex gap-1 ">
          Press
          <p>
            <span className="bg-customGray text-white p-3 rounded border border-customBorder text-sm">
              S
            </span>
          </p>
          anytime to send me an email
        </span>
      </div>
      <div className="my-24 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
        <Link href="#service">
          <button
            type="button"
            className="flex items-center text-white rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-black-900 hover:bg-gray-100 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
