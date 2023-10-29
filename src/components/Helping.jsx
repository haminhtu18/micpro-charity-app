import { COMPANY_LOGO_LINKS, HELP_LINKS } from "@/constants";
import Image from "next/image";
import React from "react";

const Helping = () => {
  return (
    <section className="flexCenter py-16 bg-[#F1F5F9]">
      <div className="max-container padding-container flexCenter flex-col w-full gap-12">
        <h1 className="font-sora bold-50 lg:max-w-[810px] text-center">
          More than <strong className="text-[#1663F9]">80,000+</strong>{" "}
          companies trust Micpro
        </h1>

        <div>
          <div className="border bg-gray-10 w-full mb-[26px]"></div>
          <div className="flex gap-20 items-center justify-start overflow-x-auto hide-scrollbar lg:justify-center">
            {COMPANY_LOGO_LINKS.map((link) => (
              <Image
                src={link}
                key={link}
                alt="company"
                width={111}
                height={30}
              />
            ))}
          </div>
          <div className="border bg-gray-10 w-full mt-[26px]"></div>
        </div>
        <div className="flex lg:gap-7 flex-col gap-[80px] lg:flex-row mt-12 lg::mt-20">
          {HELP_LINKS.map((link) => (
            <HELP_SITE
              key={link.key}
              title={link.title}
              subtitle={link.subtitle}
              logo={link.logo}
            />
          ))}
        </div>
        <h1 className="bold-50 font-sora w-[810px] text-center pt-10">
          You can Help lots of people{" "}
          <strong className="text-[#1663F9]">helping</strong> others.
        </h1>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="">
            <h3>We are here to support the vulnerable.</h3>
            <p>
              Transform the way you work with one place for everyone and
              everything you need to get stuff done.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

const HELP_SITE = ({ title, subtitle, logo }) => {
  return (
    <div className="relative h-[138px] w-[246px] border shadow-md rounded-md flex flex-col justify-center items-start">
      <Image
        src={logo}
        alt="help"
        width={80}
        height={80}
        className="absolute top-[-35%] left-[26px]"
      />
      <div className="ml-7 flex items-start flex-col">
        <h3 className="bold-20 font-sora">{title}</h3>
        <p className="regular-16 text-[#81879D]">{subtitle}</p>
      </div>
    </div>
  );
};

export default Helping;
