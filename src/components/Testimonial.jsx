import { TESTIMONIAL_LINKS } from "@/constants";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="flexCenter padding-container pb-[130px] w-full">
      <div className="max-container flexStart flex-col w-full">
        <h1 className="font-sora bold-50 pb-5">
          Our <span className="text-[#1663F9]">Testimonial</span>
        </h1>
        <p className="regular-20 text-[#81879D] pb-20">
          Read and understand our testimonial and know what people say
        </p>
        <ul className="flexCenter gap-[30px] w-full flex-col lg:flex-row">
          {TESTIMONIAL_LINKS.map((link) => (
            <TestimonialSite
              name={link.name}
              job={link.job}
              title={link.title}
              face_img={link.face_img}
              bg_icon={link.bg_icon}
              key={link.key}
              color_div={link.color_div}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

const TestimonialSite = ({
  name,
  job,
  title,
  face_img,
  bg_icon,
  color_div,
}) => {
  return (
    <li className="w-[370px] h-[397px] border-2 border-solid border-[#EBECF0] rounded-[20px] flexCenter flex-col bg-[#f7f8ff] hover:bg-[#FFF] hover:shadow-md">
      <div className="w-[80px] h-[80px] rounded-full bg-pink-100 flexCenter mb-6 relative">
        <Image src={face_img} alt={name} width={55} height={60} />
        <Image
          src={bg_icon}
          alt="icon"
          width={28}
          height={28}
          className="absolute right-[-4px] bottom-[2px]"
        />
      </div>
      <p className="regular-16 text-center w-[296px]">{title}</p>
      <div
        className={`w-[120px] h-[2px] mt-11 mb-5 bg-[${color_div}] z-20`}
      ></div>
      <h3 className="font-sora bold-20 pb-2">{name}</h3>
      <p className="regular-14 text-[#81879D]">{job}</p>
    </li>
  );
};
export default Testimonial;
