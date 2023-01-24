import { useCallback } from "react";
import "./index.scss";

const Header = ({ setCards }) => {
  const addCard = useCallback(() => {
    setCards((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          number: Math.floor(Math.random() * 100),
        },
      ];
    });
  }, [setCards]);
  const sortCards = useCallback(() => {
    setCards((prev) => {
      return prev.sort((a, b) => {
        console.log(a);
        if (a.number > b.number) return 1;
        else if (a.number < b.number) return -1;
        return 0;
      });
    });
  }, [setCards]);
  return (
    <div className="header">
      <button onClick={addCard} className="add-button">
        Add
      </button>
      <button onClick={sortCards} className="add-button">
        Sort
      </button>
    </div>
  );
};

export default Header;
