import { Card, Button, Row, Space } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const remove = (id) => {
  axios.delete(`http://localhost:4444/products/${id}`).then(() => {
    alert(`Removed ${id}`);
  });
};

const ProductItem = ({ item }) => {
  const { title, description, price, category, image, state, _id } = item;
  return (
    <Link to={`/products/${_id}`}>
      <Card
        style={{ marginBottom: 10 }}
        cover={
          <img
            alt="example"
            src="https://i1.wp.com/krasajachtingu.cz/wp-content/uploads/2014/05/vlny.jpg?fit=698%2C429&ssl=1"
          />
        }
        hoverable
      >
        <p>{title}</p>
        <p>{description}</p>
        <p>price: ${price}</p>
        <p>category: {category}</p>
        <p>state: {state}</p>
        <Row>
          <Space>
            <Button>Edit</Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                remove(_id);
              }}
              danger
            >
              Delete
            </Button>
          </Space>
        </Row>
      </Card>
    </Link>
  );
};
export default ProductItem;
