import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto text-base lg:text-lg py-6 md:py-8 lg:py-12 font-libre font-semibold">
      <div className="flex items-center justify-between">
        {/* ============= Logo ========== */}
        <Link to="/">
          <img
            src="/src/assets/images/Logo.png"
            alt="logo"
            className="w-[179px] h-[56px]"
          />
        </Link>
        {/* ========== Navbar =========== */}
        <nav>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-10">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-[#FF8414] font-semibold" : "text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-[#FF8414] font-semibold" : "text-black"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/event"
              className={({ isActive }) =>
                isActive ? "text-[#FF8414] font-semibold" : "text-black"
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/listing"
              className={({ isActive }) =>
                isActive ? "text-[#FF8414] font-semibold" : "text-black"
              }
            >
              Listing
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-[#FF8414] font-semibold" : "text-black"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#FF8414] font-semibold" : "text-black"
              }
            >
              Contact
            </NavLink>
          </ul>
        </nav>

        {/* ============== signUp Button ========== */}
        <Link to="/signup">
          <button className="w-[180px] h-[50px] bg-[#FF8414] rounded-[6px] text-white">
            Sign Up!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
