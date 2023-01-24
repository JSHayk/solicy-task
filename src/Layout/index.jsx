import { useState } from "react";
// Sections
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cards from "../components/Cards";

const Layout = () => {
  const [cards, setCards] = useState([
    {
      id: Date.now(),
      number: 8,
    },
    {
      id: Date.now(),
      number: 45,
    },
  ]);
  return (
    <>
      <Header setCards={setCards} />
      <Cards cards={cards} />
      <Footer />
    </>
  );
};

export default Layout;
