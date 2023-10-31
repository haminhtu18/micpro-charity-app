import Image from "next/image";
import Button from "./Button";

const Campaigns = () => {
  return (
    <section className="flexCenter pb-[120px] w-full">
      <div className="max-container flexStart flex-col">
        <h1 className="bold-50 font-sora pb-[80px]">
          Latest News & <span className="text-[#1663F9]">Campaigns</span>
        </h1>
        <div className="flex gap-[74px] pb-[70px]">
          <div className="flex flex-col">
            <div className="w-[96px] h-[30px] rounded-[4px] flexCenter bg-[#eaf5fb] mb-5">
              <p className="text-[#0091D0]">Donation</p>
            </div>
            <h4 className="bold-20 font-sora mb-[31px] w-[311px] h-[56px]">
              Why Are Forest So Important For Earth?
            </h4>
            <Image
              src="/campaigns-1.png"
              alt="campaigns-1"
              width={340}
              height={226}
            />
          </div>
          <div className="flex flex-col">
            <div className="w-[96px] h-[30px] rounded-[4px] flexCenter bg-[#eaf5fb] mb-5">
              <p className="text-[#0091D0]">Donation</p>
            </div>
            <h4 className="bold-20 font-sora mb-[31px] w-[311px] h-[56px]">
              Why Are Forest So Important For Earth?
            </h4>
            <Image
              src="/campaigns-1.png"
              alt="campaigns-1"
              width={340}
              height={226}
            />
          </div>
          <div className="flex flex-col">
            <div className="w-[96px] h-[30px] rounded-[4px] flexCenter bg-[#eaf5fb] mb-5">
              <p className="text-[#0091D0]">Donation</p>
            </div>
            <h4 className="bold-20 font-sora mb-[31px] w-[311px] h-[56px]">
              Why Are Forest So Important For Earth?
            </h4>
            <Image
              src="/campaigns-1.png"
              alt="campaigns-1"
              width={340}
              height={226}
            />
          </div>
        </div>
        <div>
          <Button
            title="VIEW ALL ARTICLES"
            type="button"
            variant="btn_blue"
            iconRight="/arrow-right.svg"
            round="10px"
          />
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
