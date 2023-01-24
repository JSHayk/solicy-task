import { IoMdClose } from "react-icons/io";
import "./index.scss";

const Cards = ({ cards }) => {
  console.log(cards, "cards");
  return (
    <section className="cards">
      {cards.map((item) => {
        const { id, number } = item;
        return (
          <div key={id} className="cards-item">
            <div className="delete-icon">
              <IoMdClose />
            </div>
            <h1>{number}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
