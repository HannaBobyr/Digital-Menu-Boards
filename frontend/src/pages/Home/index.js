import { useEffect, useState } from "react";
import UserItem from "components/UserItem";
import UserBusinessData from "components/UserBusinessData";
import "./Home.css";
import Loader from "components/Loader";
import NoData from "components/NoData";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4444/products")
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) return <Loader />;
  if (data.length === 0)
    return (
      <>
        <UserBusinessData />
        <NoData />
      </>
    );
  return (
    <>
      <UserBusinessData />
      <ul className="items-list">
        {data.map((item, index) => (
          <UserItem key={index} item={item} />
        ))}
      </ul>
    </>
  );
};
export default Home;
