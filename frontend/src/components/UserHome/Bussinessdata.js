import { useEffect, useState } from "react";
import { Descriptions } from "antd";

const BusinessData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4444/businessData");
      const json = await data.json();
      setData(json);
    };
    fetchData();
  }, []);

  if (!data) return <p>loarding</p>;
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
