import "./App.css";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import TopBtn from "./UX/TopBtn";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <TopBtn />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
