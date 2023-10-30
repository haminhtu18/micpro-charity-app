import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="py-5 flexBetween max-container padding-container">
      <Link href="/" className="flex justify-center items-center gap-2.5">
        <Image src="/logo.svg" alt="logo" width={36} height={36} />
        <h3 className="bold-20 font-sora">MicPro</h3>
      </Link>
      <ul className="gap-10 regular-16 hidden lg:flex h-full ">
        <Link href="/" className="hover:text-fuchsia-300">
          Home
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1.5 hover:text-fuchsia-300"
        >
          <p>Services</p>{" "}
          <Image
            src="/arrow-down.svg"
            alt="arrow-down"
            height={24}
            width={24}
          />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1.5 hover:text-fuchsia-300 transition-all"
        >
          <p>Expertise</p>{" "}
          <Image
            src="/arrow-down.svg"
            alt="arrow-down"
            height={24}
            width={24}
          />
        </Link>
        <Link href="/" className="hover:text-fuchsia-300">
          Cases
        </Link>
        <Link href="/" className="hover:text-fuchsia-300">
          Pricing
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1.5 hover:text-fuchsia-300"
        >
          <p>Company</p>{" "}
          <Image
            src="/arrow-down.svg"
            alt="arrow-down"
            height={24}
            width={24}
          />
        </Link>
      </ul>
      <div className="hidden lg:flexCenter z-20">
        <Button title="Donate Now" type="Button" variant="btn_blue" />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="lg:hidden z-20 inline-block"
      />
    </nav>
  );
};

export default Navbar;
