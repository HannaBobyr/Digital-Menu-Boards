import { Button, List, Skeleton, message } from "antd";
import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const remove = (id) => {
    axios
      .delete(`http://localhost:4444/categories/${id}`)
      .then(() => {
        setList(list.filter((document) => document._id !== id));
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
    axios.get("http://localhost:4444/categories").then(({ data }) => {
      setInitLoading(false);
      setList(data);
    });
  }, [success]);

  return (
    <>
      <Button
        onClick={() => navigate("/createcategory")}
        type="primary"
        style={{ marginBottom: 20 }}
      >
        Create Category
      </Button>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Link to={`/editcategory/${item._id}`}>edit</Link>,
              <Button onClick={() => remove(item._id)} danger>
                Delete
              </Button>,
            ]}
          >
            <Skeleton title={false} loading={item.loading} active>
              <List.Item.Meta title={<p>{item.name}</p>} />
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};

export default Categories;
