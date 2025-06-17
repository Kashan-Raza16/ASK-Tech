import "./App.css";

import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
