const Community = () => {
  return (
    <div className="py-12 md:py-20 lg:py-32 bg-[#F6FAFC]">
      {/* ========== Community Main Container ========== */}
      <div className="bg-[#12778C] w-10/12 mx-auto rounded-[48px] grid grid-cols-7 items-center justify-between max-h-[400px] ">
        {/* ======== Community Icon ======== */}
        <div className="col-span-4 relative z-10">
          <div className="absolute left-0 top-0">
            <img
              className="!z-[-1]"
              src="/src/assets/icons/communityIcon.svg"
              alt=""
            />
          </div>
          <div className="h-[400px] flex items-center lg:pl-[120px] relative z-[9]">
            <div className="">
              <h2 className="text-start font-libre text-xl md:text-2xl lg:text-[35px]  text-white lg:leading-[140%] font-bold">
                What are you waiting for? <br />
                Sign up and join the rest of <br /> the Colorado dog community
              </h2>
              <div className="mt-5 lg:mt-7 flex flex-col md:flex-row items-center space-y-3 md:space-y-0 space-x-0 md:space-x-6 lg:space-x-10">
                <button className="lg:w-[273px] text-white font-libre font-semibold h-[50px] bg-[#FF8414] rounded-md">
                  Sign Up! - It’s FREE!
                </button>
                <img src="/src/assets/icons/Vector.svg" />
              </div>
            </div>
          </div>
        </div>
        {/* =========== Image Group ======= */}
        <div className="col-span-3 px-10">
          <img
            src="/src/assets/images/community.png"
            className="w-[554px] h-[377px] mt-6 rounded-b-2xl-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
