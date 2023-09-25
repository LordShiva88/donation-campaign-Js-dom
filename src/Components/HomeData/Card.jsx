import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { category, image, title, textColor, bgColor, id } = card;
  return (
    <Link to={`/card/${id}`}>
      <div className="card  bg-base-100 shadow-xl">
        <img src={image} alt="" className="h-60 rounded-tl-lg rounded-tr-lg" />

        <div
          style={{ backgroundColor: bgColor }}
          className="card-body rounded-b-xl"
        >
          <h2
            style={{ backgroundColor: bgColor, color: textColor }}
            className="card-title w-32 px-4 py-1 rounded-md"
          >
            {category}
          </h2>
          <p style={{ color: textColor, fontSize: "20px" }}>{title}</p>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};
export default Card;
