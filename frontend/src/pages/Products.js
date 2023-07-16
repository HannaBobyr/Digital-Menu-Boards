import { useEffect, useState, useCallback } from "react";
import { Button, message, Space, Table } from "antd";
import { useNavigate, Link } from "react-router-dom";
import Loader from "components/Loader";
import NoData from "components/NoData";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4444/products")
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const remove = (id) => {
    axios
      .delete(`http://localhost:4444/products/${id}`)
      .then(() => {
        setData(data.filter((document) => document._id !== id));
        success();
      })
      .catch(() => error());
  };

  const columns = [
    {
      title: "Image",
      key: "image",
      render: (_, record) => (
        <img
          src={`http://localhost:4444${record.image}`}
          alt={record.title}
          width="60px"
          height="60px"
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "State",
      key: "state",
      dataIndex: "state",
      render: (_, { state }) => (
        <>
          {state && <p>active</p>}
          {!state && <p>inactive</p>}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button>
            <Link to={`/editproduct/${record._id}`}>Edit</Link>
          </Button>
          <Button onClick={() => remove(record._id)} danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const success = useCallback(() => {
    message.success("Deleted successfully");
  }, []);

  const error = useCallback(() => {
    message.success("Failed to delete");
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

  return <Table columns={columns} dataSource={data} pagination={false} />;
};
export default Products;
