import { useLoaderData } from "react-router-dom";
import { getDonate } from "../../Utility/LocalStroage";
import { useEffect, useState } from "react";
import DonationDetails from "../../Components/Donation/DonationDetails";

const Donation = () => {
  const donates = useLoaderData();
  const [getDonates, setDonates] = useState([]);

  const [dataLength, setLength] = useState(4);

  const [donatePei, setDonatePei] = useState();

  useEffect(() => {
    const getId = getDonate();
    const filterDonates = donates.filter((donate) => getId.includes(donate.id));
    setDonates(filterDonates);
    setDonatePei(filterDonates.length)
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
    <div className="m-10">
      <div className="container mb-10 mx-auto grid lg:grid-cols-2 gap-5">
        {getDonates.slice(0, dataLength).map((donation) => (
          <DonationDetails
            key={donation.id}
            donation={donation}
          ></DonationDetails>
        ))}
      </div>
      <div className={dataLength === getDonates.length ? "hidden" : ""}>
        <div className="flex justify-center">
          <button onClick={handleBtn} className="btn bg-[#009444] text-white">
            See More
          </button>
        </div>
      </div>
      <div className={getDonates.length > dataLength ? 'hidden': ''}>
        <div className="flex justify-center">
          <button
            onClick={() => handleBtnLess(4)}
            className="btn bg-[#009444] text-white"
          >
            See Less
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation ;
