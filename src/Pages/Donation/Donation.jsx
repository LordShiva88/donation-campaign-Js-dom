import { Link, useLoaderData } from "react-router-dom";
import { getDonate } from "../../Utility/LocalStroage";
import { useEffect, useState } from "react";
import DonationDetails from "../../Components/Donation/DonationDetails";

const Donation = () => {
  const donates = useLoaderData();
  const [getDonates, setDonates] = useState([]);

  const [dataLength, setLength] = useState(4);

  useEffect(() => {
    const getId = getDonate();
    const filterDonates = donates.filter((donate) => getId.includes(donate.id));
    setDonates(filterDonates);
  }, [donates]);

  const handleBtn = () => {
    const allData = getDonates.length;
    setLength(allData);
  };
  const handleBtnLess = (num) => {
    const allData = num;
    setLength(allData);
  };

  return (
    <div className="m-10 container mx-auto">
      <div className="mb-10 mx-auto grid lg:grid-cols-2 gap-5">
        {getDonates.slice(0, dataLength).map((donation) => (
          <DonationDetails
            key={donation.id}
            donation={donation}
          ></DonationDetails>
        ))}
      </div>
      <div
        className={
          dataLength === getDonates.length || getDonates.length < 5
            ? "hidden"
            : ""
        }
      >
        <div className="flex justify-center">
          <button onClick={handleBtn} className="btn bg-[#009444] text-white">
            See More
          </button>
        </div>
      </div>
      <div
        className={
          getDonates.length > dataLength || getDonates.length < 5
            ? "hidden"
            : ""
        }
      >
        <div className="flex justify-center">
          <button
            onClick={() => handleBtnLess(4)}
            className="btn bg-[#009444] text-white"
          >
            See Less
          </button>
        </div>
      </div>
      <div className={getDonates.length === 0 ? "" : "hidden"}>
        <div className="flex justify-center">
          <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-40 h-40 dark:text-gray-600"
              >
                <path
                  fill="currentColor"
                  d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
                ></path>
                <rect
                  width="176"
                  height="32"
                  x="168"
                  y="320"
                  fill="currentColor"
                ></rect>
                <polygon
                  fill="currentColor"
                  points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
                ></polygon>
                <polygon
                  fill="currentColor"
                  points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
                ></polygon>
              </svg>
              <p className="text-3xl">Data Not Found</p>
              <Link to={"/"}>
                <button className="btn">Back to homepage</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Donation;
