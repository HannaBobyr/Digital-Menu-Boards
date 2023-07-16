import "./UserBusinessData.css";
import { useEffect, useState } from "react";
import Loader from "components/Loader";
import axios from "axios";

const UserBusinessData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4444/businessData")
      .then(({ data }) => setData(data));
  }, []);

  if (!data) return <Loader />;
  return (
    <>
      {data.map((item, index) => (
        <header className="header" key={index}>
          <h1 className="header_business-name">{item.name}</h1>
          <p className="header_business">{item.address}</p>
          <p className="header_business">{item.phone}</p>
          <p className="header_business">{item.website}</p>
        </header>
      ))}
    </>
  );
};

export default UserBusinessData;
