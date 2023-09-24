import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const cardDetails = useLoaderData();
  const { id } = useParams();

  const find = cardDetails.find((card) => card.id == id);

  const { price, description, title, image } = find;

  return (
    <div className="container mx-auto my-10">
      <div>
        <img src={image} alt="" className="w-full relative" />
        <div className="h-10 w-full bg-black absolute -m-10 opacity-40">
          <button className="bg-green-500">Hello</button>
        </div>
      </div>
      <h2 className="text-4xl font-bold my-6">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CardDetails;
