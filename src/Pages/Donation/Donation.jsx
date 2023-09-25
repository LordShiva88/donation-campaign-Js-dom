import { useLoaderData } from "react-router-dom";
import { getDonate } from "../../Utility/LocalStroage";
import { useEffect, useState } from "react";
import DonationDetails from "../../Components/Donation/DonationDetails";

const Donation = () => {
  const donates= useLoaderData()
  const [getDonates, setDonates] = useState([]);

  useEffect(()=>{
    const getId = getDonate()
    const filterDonates = donates.filter(donate => getId.includes(donate.id)) 
    setDonates(filterDonates)

  },[donates])

  // const getId = getDonate()
  // console.log(getId)
  return (
    <div className="container my-20 mx-auto grid lg:grid-cols-2 gap-5">
      {
        getDonates.map(donation => <DonationDetails key={donation.id} donation={donation}></DonationDetails>)
      }
    </div>
  );
};

export default Donation;