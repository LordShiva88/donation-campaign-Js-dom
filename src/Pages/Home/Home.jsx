
import { useLoaderData } from "react-router-dom";
import HomeData from "../../Components/HomeData/HomeData";

const Home = () => {
  const data = useLoaderData()
  return (
    <div>
      <HomeData data={data}></HomeData>
    </div>
  );
};

export default Home;