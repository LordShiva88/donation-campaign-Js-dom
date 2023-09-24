import { NavLink } from "react-router-dom";
import image from "../../../assets/Logo.png";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
          }
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="p-3">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <div className="hidden lg:flex">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end flex lg:hidden">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
