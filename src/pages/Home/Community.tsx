const Community = () => {
  return (
    <div className="py-12 md:py-20 lg:py-32 bg-[#F6FAFC]">
      {/* ========== Community Main Container ========== */}
      <div className="bg-[#12778C] container mx-auto rounded-[48px] grid grid-cols-7 items-center justify-between max-h-[400px] ">
        {/* ======== Community Icon ======== */}
        <div className="col-span-4 bg-green-500">
          <div className="w-[414px] h-[400px] bg-[url('/src/assets/icons/communityIcon.svg')] bg-cover bg-center flex flex-col items-center justify-center">
            <div className="w-[537px]  flex items-center justify-end bg-amber-500 ">
              <h2 className="text-start font-libre text-xl md:text-2xl lg:text-[34px] tracking-[-1.88px]  text-white lg:leading-[140%] font-bold">
                What are you waiting for? <br />
                Sign up and join the rest of <br /> the Colorado dog community
              </h2>
            </div>
            <div className="mt-5 lg:mt-7 flex flex-col md:flex-row items-center space-y-3 md:space-y-0 space-x-0 md:space-x-6 lg:space-x-6 ml-24">
              <button className="lg:w-[273px] text-white font-libre font-semibold h-[50px] bg-[#FF8414] rounded-md">
                Sign Up! - It’s FREE!
              </button>
              <div className="bg-red-600">
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
