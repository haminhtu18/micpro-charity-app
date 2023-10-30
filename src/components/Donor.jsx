import Image from "next/image";

const Donor = () => {
  return (
    <section className="bg-[#F1F5F9] py-12">
      <div className="flexCenter max-container relative">
        <div className="absolute top-[-240px]">
          <div className="relative w-full z-20 h-[574px]">
            <Image
              src="/img-1.png"
              alt="img-1"
              width={1170}
              height={574}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donor;
