import { useEffect, useState, useCallback } from "react";
import { Col, Row, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import Loader from "components/Loader";
import NoData from "components/NoData";
import ProductItem from "components/ProductItem";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const remove = (id) => {
    axios
      .delete(`http://localhost:4444/products/${id}`)
      .then(() => {
        setData(data.filter((document) => document._id !== id));
        success();
      })
      .catch(() => error());
  };

  const success = useCallback(() => {
    message.success("Deleted successfully");
  }, []);

  const error = useCallback(() => {
    message.success("Failed to delete");
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4444/products")
      .then(({ data }) => setData(data));
  }, []);

  if (!data) return <Loader />;
  if (data.length === 0)
    return (
      <>
        <Button
          onClick={() => navigate("/createproduct")}
          type="primary"
          style={{ marginBottom: 20 }}
        >
          Create Product
        </Button>
        <NoData />
      </>
    );

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
              <ProductItem item={item} admin={true} remove={remove} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default Products;
