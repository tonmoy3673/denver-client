import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";

const Main = () => {
  return (
    <div className="w-full bg-[#F6FAFC]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
