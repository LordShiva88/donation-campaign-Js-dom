import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveDonate } from "../../Utility/LocalStroage";

const CardDetails = () => {
  const cardDetails = useLoaderData();
  const { id: ide } = useParams();

  const find = cardDetails.find((card) => card.id == ide);

  const { price, description, title, image, id, textColor } = find;

  const handleClick = () => {
    saveDonate(id);
    toast("Successfully Donated !!!");
  };

  return (
    <div className="w-4/5 mx-auto my-10">
      <div>
        <img src={image} alt="" className="w-full relative rounded-lg" />
        <div className="h-20 w-4/5 mx-auto bg-black absolute -m-20 opacity-40 p-2 rounded-lg"></div>
        <button
          onClick={handleClick}
          style={{ backgroundColor: textColor }}
          className="hover:bg-[#FF444A] absolute -m-16 ml-8 p-2 rounded-lg text-white"
        >
          Donate ${price}
        </button>
      </div>
      <h2 className="text-4xl font-bold my-6">{title}</h2>
      <p>{description}</p>
      <ToastContainer />
    </div>
  );
};

export default CardDetails;
