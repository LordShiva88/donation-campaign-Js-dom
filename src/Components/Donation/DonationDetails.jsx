import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DonationDetails = ({ donation }) => {


  const [donates, setDonates] = useState([]);

  useEffect(() => {
    setDonates(donation);
  }, [donation]);

  const { price, category, title, image, textColor, bgColor } =
    donates;
  return (
    <div className="flex">
      <img src={image} alt="" />

      <div
        style={{ backgroundColor: bgColor }}
        className="card-body"
      >
        <h2
          style={{ backgroundColor: bgColor, color: textColor }}
          className="card-title w-32 px-4 py-1 rounded-md"
        >
          {category}
        </h2>
        <p style={{ color: textColor, fontSize: "20px" }}>{title}</p>
        <p style={{ color: textColor, fontSize: "20px" }}>${price}</p>
        <Link to={'/'}>
          <button style={{ backgroundColor: textColor}} className="btn text-white font-bold">View Details</button>
        </Link>
      </div>
      
    </div>
  );
};
DonationDetails.propTypes = {
  donation: PropTypes.object.isRequired,
};
export default DonationDetails;
