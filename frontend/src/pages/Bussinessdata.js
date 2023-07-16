import { useEffect, useState } from "react";
import { Descriptions } from "antd";
import Loader from "components/Loader";
import NoData from "components/NoData";
import axios from "axios";

const BusinessData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4444/businessData")
      .then(({ data }) => setData(data))
      .catch((err) =>console.log(err));
  }, []);

  if (!data) return <Loader />;
  if (data.length === 0) return <NoData />;
  return (
    <>
      {data.map((item, index) => {
        return (
          <Descriptions layout="vertical" title="Bussiness Data" key={index}>
            <Descriptions.Item label="name">{item.name}</Descriptions.Item>
            <Descriptions.Item label="address">
              {item.address}
            </Descriptions.Item>
            <Descriptions.Item label="phone">{item.phone}</Descriptions.Item>
            <Descriptions.Item label="website">
              {item.website}
            </Descriptions.Item>
          </Descriptions>
        );
      })}
    </>
  );
};
export default BusinessData;
