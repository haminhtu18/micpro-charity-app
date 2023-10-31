import Image from "next/image";
import React from "react";
import Button from "./Button";

const Join = () => {
  return (
    <section className="flexCenter w-full pb-[120px]">
      <div className="max-container box-4 h-[483px] w-full rounded-[20px] relative flex items-center overflow-hidden padding-container">
        <div className="flex flex-1 lg:min-h-[400px]">
          <Image
            src="/123.png"
            alt="join"
            width={784}
            height={440}
            className="absolute left-0"
          />
        </div>
        <div className="w-[40%] flex flex-col justify-start">
          <h1 className="font-sora bold-34 w-[413px] text-white pb-[34px]">
            Become a Volunteer of our charity
          </h1>
          <p className="regular-16 text-white w-[486px] pb-11">
            We believe your project is only as good as the team that's working
            on it. When we work with you and your team, we know there are no
            shortcuts to success. Your research is done; now lets get down to
            business!
          </p>
          <div>
            <Button
              type="button"
              title="Join the team"
              iconRight="/arrow-right.svg"
              variant="btn_blue"
              round="10px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
