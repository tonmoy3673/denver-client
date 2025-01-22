import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";

const Main = () => {
  return (
    <div className="max-w-[1728px] bg-[#F6FAFC] mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
