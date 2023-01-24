import { useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, sortCards } from "../../store/slices/cards.slice";
import "./index.scss";

const Header = () => {
  const cards = useSelector((state) => state.cards.data);
  const dispatch = useDispatch();
  const checkNumber = useCallback(() => {
    let number = Math.floor(Math.random() * 100);
    while (cards.find((item) => item.number === number)) {
      number = Math.floor(Math.random() * 100);
    }
    return number;
  }, [cards]);

  return (
    <div className="header">
      <button
        onClick={() =>
          dispatch(
            addCard({
              id: Date.now(),
              number: checkNumber(),
            })
          )
        }
        className="add-button"
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(sortCards());
        }}
        className="sort-button"
      >
        Sort
      </button>
    </div>
  );
};

export default memo(Header);
