import { Outlet } from "react-router-dom";
// import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";

import "preline/preline";
import { useEffect } from "react";

const Root = () => {
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;
