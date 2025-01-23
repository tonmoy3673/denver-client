const HeroSection = () => {
  return (
    <div className="hero flex items-center">
      <div className="w-10/12 mx-auto">
        <div className="">
          <div className="flex gap-2.5 items-center mb-2.5">
            <button className=" w-[147px] h-[37px] text-lg bg-[#1EA7C4] text-white rounded-md px-5 py-1 font-bold">
              FEATURED
            </button>
            <button className="w-[147px] h-[37px] text-lg bg-transparent border border-[#E9BB32] text-white rounded-md px-5 py-1 font-bold">
              Educational
            </button>
          </div>
          <div className="text-white md:w-[720px] w-full mb-5">
            <h2 className="md:text-[64px] text-[48px] font-semibold">
              The Raw Diet 101: Tips To Feed Your Dogs A Natural Raw Diet
            </h2>
          </div>
          <div className="md:flex justify-between">
            <div className="flex flex-col md:flex-row md:gap-10 gap-2.5">
              <div className="flex gap-2.5 items-center">
                <img
                  className="w-[25px] h-[25px]"
                  src="/src/assets/icons/Headshot.svg"
                  alt=""
                />
                <span className="text-white text-lg">By: Skylar Scheele</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <img
                  className="w-[25px] h-[25px]"
                  src="/src/assets/icons/clock 1.svg"
                  alt=""
                />
                <span className="text-white text-lg">4 minute read</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <img
                  className="w-[25px] h-[25px]"
                  src="/src/assets/icons/calendar 1.svg"
                  alt=""
                />
                <span className="text-white text-lg">
                  Published: March 21, 2024
                </span>
              </div>
            </div>
            <div className="flex gap-2.5 items-center md:mt-0 mt-2.5">
              <img
                className="w-[25px] h-[25px]"
                src="/src/assets/icons/resize 2.svg"
                alt=""
              />
              <span className="text-white text-lg border-b border-white">
                Continue reading
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
