import Image from "next/image";

const Breathe = () => {
  return (
    <section className="bg-[#FFF] flexCenter pb-[100px] pt-[120px]">
      <div className="max-container w-full flexStart flex-col h-full padding-container">
        <h1 className="font-sora bold-50 lg:max-w-[757px] text-center pb-6">
          We're here to help our Earth{" "}
          <span className="text-[#1663F9]">breathe</span> again.
        </h1>
        <p className="text-[#81879D] regular-18 font-dmsans lg:max-w-[555px] text-center pb-11">
          Voluptatem accusantium doloremque laud totam rem aperiam, eaque ipsa
          quae ab illoaperiam, eaque ipsa quae.
        </p>
        <div className="flexCenter h-full w-full gap-[120px]">
          <Image
            src="/volunteers-posting-social-media-1.png"
            alt="volunteers"
            width={566}
            height={302}
          />
          <div className="grid grid-cols-2 gap-12 w-[50%] relative h-full">
            <div className="flex flex-col gap-3">
              <h3 className="bold-34 font-sora text-[#1663F9]">254K</h3>
              <p className="regular-18 text-[#81879D]">Collaborators</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="bold-34 font-sora text-[#FF7999]">488K</h3>
              <p className="regular-18 text-[#81879D]">Companies</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="bold-34 font-sora text-[#3DB0E5]">157K</h3>
              <p className="regular-18 text-[#81879D]">Human Impacted</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="bold-34 font-sora text-[#F5953A]">325K</h3>
              <p className="regular-18 text-[#81879D]">Assisted Communities</p>
            </div>
            <div className="w-[300px] h-[1px] rotate-[-90deg] absolute top-[42%] left-[45%] translate-x-[-50%]  bg-[#EBECF0]"></div>
            <div className="w-[540px] h-[1px] absolute top-[45%] left-0 bg-[#EBECF0]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breathe;
