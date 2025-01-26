import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="">
      {/* ============ Top Footer =========== */}

      {/* ================ Dog Container ========= */}
      <div className="relative z-0">
        <div>
          <div className="flex items-center justify-evenly">
            {/* ================ Right Dog ========= */}
            <div className="w-[30%] ">
              <img
                src="/src/assets/images/dog1.png"
                className="w-[305px] h-[350px] mx-auto z-100"
              />
            </div>
            {/* ========== Text Content ========= */}
            <div className="relative w-[30%] mx-auto pb-24 lg:pb-32">
              <img
                src="/src/assets/icons/love.svg"
                className="mx-auto w-[208px] h-[170px]"
              />
              <h3 className="absolute  font-kalam !leading-[130%] text-[27px] font-bold text-[#35424B] top-9 text-center">
                “Delivering Colorado's best dog-friendly spots at your
                fingertips”
              </h3>
            </div>
            {/* ================ left Dog ========= */}
            <div className="w-[30%] ">
              <img
                src="/src/assets/images/dog2.png"
                className="w-[270px] h-[305px] mx-auto z-100"
              />
            </div>
          </div>
        </div>

        {/* ============ orange border ============= */}
        <div className="bg-[#FF8414] h-[40px] -mt-24 lg:-mt-36"></div>
      </div>

      {/* ============== bottom footer ============= */}
      <div className="bg-[#35424B] h-[587px]">
        {/* ========= Lower Footer Grid ============= */}
        <div className="pt-20 lg:pt-36 ">
          {/* ========== Logo Columns =========== */}
          <div className="flex flex-col gap-y-6">
            <img
              className="w-[180px] h-[50px]"
              src="/src/assets/icons/DDR Logo.svg"
              alt="logo"
            />
            <p className="text-base text-white">
              Empowering Denver's dog lovers with the ultimate guide to
              dog-friendly experiences: Denver Dog Recon is your educational
              platform to stay in-the-know of all dog approved amenities in
              Colorado.
            </p>
          </div>
          {/* ============ Pages Columns ========== */}
          <div>
            <h2>Pages</h2>
            <div>
              <Link to="/home">Home</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
