import { TOP_DONORS } from "@/constants";
import Image from "next/image";

const Donor = () => {
  return (
    <section className="bg-[#F1F5F9] h-[120vh]">
      <div className="flexCenter max-container relative h-full">
        <div className="absolute top-[-130px] md:top-[-240px]">
          <div className="relative w-full z-20 h-auto">
            <Image
              src="/img-1.png"
              alt="img-1"
              width={327}
              height={574}
              className="rounded-3xl md:w-[1170px]"
            />
            <Image
              src="/button-play.svg"
              alt="button-play"
              width={120}
              height={100}
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 md:w-[240px]"
            />
          </div>
        </div>
        <div className="w-full flexCenter absolute md:top-[400px] top-[100px] md:gap-20 flex-col">
          <h1 className="font-sora bold-28 md:bold-50">
            Top <span className="text-[#1663F9]">Donors</span>
          </h1>
          <div className="grid grid-cols-3 gap-6">
            {TOP_DONORS.map((top) => (
              <DonorSite
                key={top.key}
                face_id={top.key}
                face_img={top.face_img}
                title={top.title}
                price={top.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DonorSite = ({ face_id, face_img, title, price }) => {
  console.log(face_id);
  return (
    <div className="border border-solid border-[#D9DFE5] w-[370px] h-[100px] bg-[#F1F5F9] rounded-[10px] flex items-center px-[19px] justify-between hover:bg-[#FFF]">
      <div className="flexCenter w-[60px] h-[60px] bg-[#D9D9D9] rounded-full">
        <Image src={face_img} alt={title} width={40} height={60} />
      </div>
      <div>
        <h3 className="font-sora bold-20">{title}</h3>
        <p className="regular-20 text-[#81879D]">{price}</p>
      </div>
      <div className="w-6 h-6 bg-[#F5953A] rounded-full flexCenter">
        <span className="z-20">{face_id}</span>
      </div>
    </div>
  );
};

export default Donor;
