import { memo } from "react";
// Sections
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Aside from "../components/Aside";

const Layout = () => {
  return (
    <>
      <div className="content">
        <Header />
        <Cards />
        <Footer />
      </div>
      <Aside />
    </>
  );
};

export default memo(Layout);
