import { COMPANY_LOGO_LINKS, HELP_LINKS } from "@/constants";
import Image from "next/image";
import React from "react";

const Helping = () => {
  return (
    <section className="flexCenter pt-16 pb-[312px]  bg-[#FFF] w-full">
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
        <h1 className="bold-28 font-sora w-[285px] md:w-[810px] lg:bold:50 text-center pt-10">
          You can Help lots of people{" "}
          <strong className="text-[#1663F9]">helping</strong> others.
        </h1>
        <div className="flex flex-col-reverse lg:flex-row pt-2 items-start w-full">
          <div className="flex flex-1 flex-col">
            <h3 className="font-sora bold-28 lg:bold-50 lg:max-w-[379px] pb-6">
              We are here to support the vulnerable.
            </h3>
            <p className="regular-16 text-gray-30 lg:max-w-[512px]">
              Transform the way you work with one place for everyone and
              everything you need to get stuff done.
            </p>
            <ul className="flex flex-col gap-5 mt-[46px]">
              <li className="flex items-center gap-2">
                <Image
                  src="/check-orange.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <h4 className="regular-18">
                  500m liters of water provided through communities
                </h4>
              </li>

              <li className="flex items-center gap-2">
                <Image
                  src="/check-orange.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <h4 className="regular-18">
                  4000+ house built for the poor people
                </h4>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/check-orange.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <h4 className="regular-18">
                  700+ school built for those childrens
                </h4>
              </li>
            </ul>
          </div>
          <div className="bg-[#F2F2F2] flex w-[506px] h-[523px] bg-cover relative rounded-[36px]">
            <div className="box-1 absolute top-[35px] right-[-54px] z-20">
              <div className="relative w-full h-full">
                <Image
                  src="/check-green.svg"
                  alt="check"
                  width={23}
                  height={23}
                  className="top-[-20px] absolute left-[-14px] md:w-[40px] md:h-[39px]"
                />
                <div className="absolute flex items-center justify-between w-[236px] left-[51px] top-[17px]">
                  <div className="flex gap-[5px] items-center">
                    <Image
                      src="/circle-orange.svg"
                      alt="circle"
                      width={10}
                      height={10}
                    />
                    <Image
                      src="/circle-gray.svg"
                      alt="circle"
                      width={10}
                      height={10}
                    />
                    <div className="h-[5px] w-[85px] bg-[#C5CBD3] rounded-[30px]"></div>
                  </div>
                  <Image
                    src="/yellow-person.svg"
                    alt="person"
                    width={31}
                    height={31}
                  />
                </div>
                <div className="absolute top-[51px] left-[52px]">
                  <Image
                    src="/khuyet.svg"
                    alt="khuyet"
                    width={66}
                    height={66}
                  />
                </div>
                <div className="absolute top-[52px] left-[90px]">
                  <Image src="/quat.svg" alt="quat" width={40} height={40} />
                </div>
                <div className="absolute top-[59px] left-[140px] flex flex-col gap-[10px] h-full items-start w-full">
                  <div className="w-[68px] h-[5px] bg-[#C5CBD3] rounded-[30px]"></div>
                  <div className="flex flex-col gap-1 w-full h-full">
                    <div className="w-[142px] h-[3px] bg-[#E4E4E4] rounded-[10px]"></div>
                    <div className="w-[142px] h-[3px] bg-[#E4E4E4] rounded-[10px]"></div>
                    <div className="w-[142px] h-[3px] bg-[#E4E4E4] rounded-[10px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-2 absolute top-[103px] left-[72px]">
              <div className="w-full relative h-full">
                <div className="absolute w-full top-[22.77px] left-[26.91px] lg:top-[] lg:left-[] ">
                  <Image
                    src="/sitebar.svg"
                    alt="sitebar"
                    width={222.495}
                    height={16.558}
                  />
                  <div className="mt-[30px] flex flex-col gap-[23.8px]">
                    <div className="w-[305.281px] h-[80.718px] box-3 flexCenter">
                      <div className="flex flex-row w-[280px] h-full items-center justify-between">
                        <div className="relative w-[50px] h-[50px]">
                          <Image
                            src="/p-blue.svg"
                            alt="p-blue"
                            width={50}
                            height={50}
                            className="absolute"
                          />
                          <Image
                            src="/star-yellow.svg"
                            alt="star"
                            width={23}
                            height={23}
                            className="absolute bottom-0 right-[-4px]"
                          />
                        </div>
                        <div className="flex flex-col gap-[12.42px] pr-10">
                          <div className="bg-[#B3BAC5] w-[125.217px] h-[7.244px] rounded-xl" />
                          <div className="bg-[#EFF1F3] w-[139.705px] h-[7.244px] rounded-xl" />
                        </div>
                        <Image
                          src="3dod.svg"
                          alt="3dod"
                          width={4.139}
                          height={18.627}
                        />
                      </div>
                    </div>
                    <div className="w-[305.281px] h-[80.718px] box-3 flexCenter">
                      <div className="flex flex-row w-[280px] h-full items-center justify-between">
                        <div className="relative w-[50px] h-[50px]">
                          <Image
                            src="/p-blue.svg"
                            alt="p-blue"
                            width={50}
                            height={50}
                            className="absolute"
                          />
                          <Image
                            src="/star-yellow.svg"
                            alt="star"
                            width={23}
                            height={23}
                            className="absolute bottom-0 right-[-4px]"
                          />
                        </div>
                        <div className="flex flex-col gap-[12.42px] pr-10">
                          <div className="bg-[#B3BAC5] w-[125.217px] h-[7.244px] rounded-xl" />
                          <div className="bg-[#EFF1F3] w-[139.705px] h-[7.244px] rounded-xl" />
                        </div>
                        <Image
                          src="3dod.svg"
                          alt="3dod"
                          width={4.139}
                          height={18.627}
                        />
                      </div>
                    </div>
                    <div className="w-[305.281px] h-[80.718px] box-3 flexCenter">
                      <div className="flex flex-row w-[280px] h-full items-center justify-between">
                        <div className="relative w-[50px] h-[50px]">
                          <Image
                            src="/p-blue.svg"
                            alt="p-blue"
                            width={50}
                            height={50}
                            className="absolute"
                          />
                          <Image
                            src="/star-yellow.svg"
                            alt="star"
                            width={23}
                            height={23}
                            className="absolute bottom-0 right-[-4px]"
                          />
                        </div>
                        <div className="flex flex-col gap-[12.42px] pr-10">
                          <div className="bg-[#B3BAC5] w-[125.217px] h-[7.244px] rounded-xl" />
                          <div className="bg-[#EFF1F3] w-[139.705px] h-[7.244px] rounded-xl" />
                        </div>
                        <Image
                          src="3dod.svg"
                          alt="3dod"
                          width={4.139}
                          height={18.627}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
