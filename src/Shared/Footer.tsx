const Footer = () => {
  return (
    <footer className="">
      {/* ============ Top Footer =========== */}

      <div className="flex items-center justify-evenly">
        {/* ================ Right Dog ========= */}
        <div className="w-[30%] ">
          <img
            src="/src/assets/images/dog1.png"
            className="w-[305px] h-[350px] mx-auto"
          />
        </div>
        {/* ========== Text Content ========= */}
        <div className="relative w-[30%] mx-auto">
          <img
            src="/src/assets/icons/love.svg"
            className="mx-auto w-[208px] h-[170px]"
          />
          <h3 className="absolute  font-kalam leading-[130%] text-[27px] font-bold text-[#35424B] top-9 text-center">
            “Delivering Colorado's best dog-friendly spots at your fingertips”
          </h3>
        </div>
        {/* ================ left Dog ========= */}
        <div className="w-[30%] ">
          <img
            src="/src/assets/images/dog2.png"
            className="w-[270px] h-[305px] mx-auto"
          />
        </div>
      </div>

      {/* ============ orange border ============= */}
      <div className="bg-[#FF8414] h-[50px]"></div>

      {/* ============== bottom footer ============= */}
      <div className="bg-[#35424B] h-[587px]"></div>
    </footer>
  );
};

export default Footer;
