import { Card, Button, Row, Space } from "antd";
import { Link } from "react-router-dom";

const ProductItem = ({ item, admin, remove }) => {
  const { title, description, price, category, image, state, _id } = item;
  return (
    <Card
      style={{ marginBottom: 10 }}
      cover={<img alt={title} src={image} />}
      hoverable
    >
      <p>{title}</p>
      <p>{description}</p>
      <p>price: ${price}</p>
      <p>category: {category}</p>
      {state && <p>state: active</p>}
      {!state && <p>state: inactive</p>}
      {admin && (
        <Row>
          <Space>
            <Button>
              <Link to={`/editproduct/${_id}`}>Edit</Link>
            </Button>
            <Button onClick={() => remove(_id)} danger>
              Delete
            </Button>
          </Space>
        </Row>
      )}
    </Card>
  );
};
export default ProductItem;
