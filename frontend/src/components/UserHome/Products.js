import { useEffect, useState } from "react";
import { Col, Row, Button } from "antd";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4444/products");
      const json = await data.json();
      setData(json);
    };
    fetchData();
  }, []);

  if (!data) return <p>loarding</p>;
  return (
    <>
      <Button
        onClick={() => navigate("/createproduct")}
        type="primary"
        style={{ marginBottom: 20 }}
      >
        Create Product
      </Button>
      <Row gutter={16}>
        {data.map((item, index) => {
          return (
            <Col className="gutter-row" span={8} key={index}>
              <ProductItem item={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default Products;
