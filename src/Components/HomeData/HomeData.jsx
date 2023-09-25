import "./Style.css";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const HomeData = ({ data }) => {
  const [cards, setCards] = useState([]);
  const [filterCards, setFilteredCards] = useState([]);

  useEffect(() => {
    setCards(data);
    setFilteredCards(data);
  }, [data]);

  const handleBtn = () => {
    const input = document.getElementById("input");
    const inputValue = input.value.toLowerCase();
    console.log(inputValue);

    if (
      inputValue === "food" ||
      inputValue === "health" ||
      inputValue === "clothing" ||
      inputValue === "education"
    ) {
      const filterData = cards.filter(
        (card) => card.category.toLowerCase() === inputValue
      );
      setFilteredCards(filterData);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center md:h-[600px] lg:p-0 p-10 items-center bg-image overlay">
        <h1 className="md:text-5xl text-3xl font-bold text-center">
          I Grow By Helping People In Need
        </h1>
        <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem] mt-10">
          <input
            id="input"
            type="email"
            className="peer h-full w-full rounded-[7px] border border-gray-400 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder="Search here"
            required
          />
          <button
            onClick={handleBtn}
            className="!absolute right-1 top-1 z-10 select-none rounded bg-[#FF444A] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg"
            type="button"
            data-ripple-light="true"
          >
            Search
          </button>
        </div>
      </div>
      <div className="my-20 grid lg:grid-cols-4 md:grid-cols-2 gap-5 container mx-auto">
        {filterCards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

HomeData.propTypes = {
  data: PropTypes.array.isRequired,
};

export default HomeData;
