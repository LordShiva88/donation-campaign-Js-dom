import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const HomeData = () => {
  const [cards, setCards] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res=> res.json())
    .then(data => setCards(data))
  },[])


  return (
    <div className="my-20 grid lg:grid-cols-4 md:grid-cols-2 gap-5 container mx-auto" >
      {
        cards.map(card => <Card key={card.id} card={card}></Card>)
      }
    </div>
  );
};

export default HomeData;