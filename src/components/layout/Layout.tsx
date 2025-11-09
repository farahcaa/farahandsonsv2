import { Outlet } from "react-router";

import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className=" min-h-[100vh] flex border flex-col">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div className="grow">
        <Outlet />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
