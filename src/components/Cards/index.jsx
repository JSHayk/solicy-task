import { useEffect, memo } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addCards, deleteCard } from "../../store/slices/cards.slice";
import "./index.scss";

const Cards = () => {
  const cards = useSelector((state) => state.cards.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem("cards") || "[]");
    if (savedCards) {
      dispatch(addCards(savedCards));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <section className="cards">
      {cards?.map((item) => {
        const { id, number } = item;
        return (
          <div key={id} className="cards-item">
            <div
              onClick={() =>
                dispatch(
                  deleteCard({
                    id,
                  })
                )
              }
              className="delete-icon"
            >
              <IoMdClose />
            </div>
            <h1>{number}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default memo(Cards);
