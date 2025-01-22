import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";

const Main = () => {
  return (
    <div className="max-w-[1728px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
