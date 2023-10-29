import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flexCenter flex-col pt-10 pb-20 bg-bg-hero ">
      <div className="max-container flexCenter flex-col gap-10 w-full">
        <h1 className="capitalize font-sora bold-34 lg:bold-60 xl:max-w-[807px] text-center">
          Fundraising Through Your Social{" "}
          <strong className="font-network">Networks</strong>
        </h1>
        <p className="regular-18 text-[#1F2326] text-center md:max-w-[715px] xs:max-w-[285px]">
          Are you looking for a way to close all marketing, technical and
          customer support tasks for your company in one place
        </p>
        <div className="flex gap-5 flex-col lg:flex-row">
          <Button
            type="button"
            title="Donate Now"
            variant="btn_blue"
            iconRight="/arrow-right.svg"
          />
          <Button
            type="button"
            title="Watch Video"
            variant="btn_white"
            iconLeft="/play.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
