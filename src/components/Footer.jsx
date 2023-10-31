import { FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter overflow-hidden w-full pb-12">
      <div className="max-container w-full padding-container flex flex-col gap-10">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="flex pb-[29px] justify-center items-center gap-2.5"
            >
              <Image src="/logo.svg" alt="logo" width={36} height={36} />
              <h3 className="bold-20 font-sora">MicPro</h3>
            </Link>

            <p className="regular-16 w-[205px]">
              he new allocation will help expand response to cover those.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.label}>
                <ul className="flex flex-col gap-4 regular-14">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <FooterColumn title={SOCIALS.title}>
              <ul className="flex gap-4 regular-14 text-gray-30">
                {SOCIALS.links.map((link) => (
                  <Link
                    href="/"
                    key={link}
                    className="w-[38px] h-[38px] rounded-full border-2 border-solid border-[#f0f0f0] flexCenter"
                  >
                    <Image src={link} alt="socials" width={24} height={24} />
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
        <div className="border bg-gray-20"></div>
        <p className="regular-14 w-full text-center text-gray-30">
          © 2021 Besnik.com I All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex gap-5 flex-col">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
