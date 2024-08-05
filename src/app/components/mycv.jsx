import React from "react";
import Image from "next/image";
import downloadIcon from "../Images/download.png";

const Mycv = () => {
  const handleDownload = () => {
    const downloadUrl = "/LabinotMurati_CV.pdf";
    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = "LabinotMurati_CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="btn">
      <button
        className="
        w-40 h-16 mb-5 border border-white bg-black rounded-lg 
        cursor-pointer select-none transition-all duration-150 
        active:translate-y-2 active:[box-shadow:0_0px_0_0_#fff,0_0px_0_0_#fff]
        active:border-b-0 [box-shadow:0_0_10px_0_#fff,0_15px_0_0_#fff]
        border-b-[1px]
        hover:translate-y-2 hover:[box-shadow:0_1px_125px_0px_rgba(255,255,255,0.5)]"
        onClick={handleDownload}
      >
        <div className="flex items-center justify-center ">
          <Image src={downloadIcon} width={30} height={30} alt="Download CV" />
          <h2 className="text-white ml-2 font-bold relative top-1">Download CV</h2>
        </div>
      </button>
    </div>
  );
};

export default Mycv;
